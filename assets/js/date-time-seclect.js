const dateElements = document.querySelectorAll('.date-time-element');

dateElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Xóa class 'main-color' khỏi tất cả các phần tử
    dateElements.forEach((el) => el.classList.remove('main-color'));
    
    // Thêm class 'main-color' cho phần tử hiện tại
    element.classList.add('main-color');
  });
});

  