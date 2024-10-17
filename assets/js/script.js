//Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    //Kiểm tra vị trí của header
    if(window.scrollY > 100){
        header.classList.add('scrolled'); //Thêm class scrolled khi cuộn
    }else{
        header.classList.remove('scrolled'); // Xóa màu header khi ở đầu trang
    }
});



//Slider

// Biến lưu vị trí hiện tại của slide
let currentIndex = 0;
// Lấy phần chứa các slide
const scrollSlide = document.querySelector('.scroll-slider');
// Tổng số lượng slide
const totalSlides = document.querySelectorAll('.slider').length;
// Lấy chiều rộng(width) của mỗi slide
const slideWidth = document.querySelector('.slider').clientWidth;

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