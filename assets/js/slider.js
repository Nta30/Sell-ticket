// Biến lưu vị trí hiện tại của slide
let currentIndex = 0;
// Lấy phần chứa các slide
const scrollSlide = document.querySelector('.scroll-slider');
// Tổng số lượng slide
const totalSlides = document.querySelectorAll('.slider').length;
// Lấy chiều rộng(width) của mỗi slide
const slideWidth = document.querySelector('.slider').clientWidth;
//Biến lưu inerval
let slideInterval;

// Hàm showSlide để hiện 1 slide cụ thể
function showSlide(index){
    scrollSlide.scrollTo({
        left: index * slideWidth, // Dịch chuyển theo chiều ngang dựa theo chỉ số index
        behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
    });
}
//Sự kiện khi nhấn nút phải
document.querySelector('.btn-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Nếu vượt quá tổng số slide thì quay lại slide đầu tiên
    showSlide(currentIndex); // Hiển thị slide tại vị trí currentIndex
});

//Sự kiện khi nhấn nút trái
document.querySelector('.btn-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Nếu currentIndex là âm thì scroll tới slide cuối cùng
    showSlide(currentIndex); // Hiển thị slide
});
// Hàm để slide tự trượt sau 4 giây
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides; // Tăng index và quay vòng lại khi hết slide
        showSlide(currentIndex); // Hiển thị slide mới
    }, 4000); // 4000ms = 4 giây
}
// Tự động trượt sau 4 giây
startAutoSlide(); // Bắt đầu tự động chạy slide
// Hàm dừng autoSlide
function stopAutoSlide() {
    clearInterval(slideInterval); // Dừng setInterval
}
// Khi di chuột vào slide thì dừng autoSlide
scrollSlide.addEventListener('mouseenter', stopAutoSlide);
// Khi bỏ chuột ra thì tiếp tục
scrollSlide.addEventListener('mouseleave', startAutoSlide);
