const scrollContainer = document.querySelector('.scroll-section-1');
const section1Elem = document.querySelector('.section-1-element'); // Lấy phần tử đầu tiên
const section1ElemWidth = section1Elem.offsetWidth + 24; // Chiều rộng của một phần tử bao gồm cả margin
const btnLeft = document.querySelector('.section-1-btn-left');
const btnRight = document.querySelector('.section-1-btn-right');

// Sự kiện khi nhấn nút mũi tên trái
btnLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -section1ElemWidth, // Cuộn sang trái đúng một phần tử
        behavior: 'smooth'
    });
});

// Sự kiện khi nhấn nút mũi tên phải
btnRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: section1ElemWidth, // Cuộn sang phải đúng một phần tử
        behavior: 'smooth'
    });
});