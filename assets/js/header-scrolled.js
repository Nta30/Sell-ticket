window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    //Kiểm tra vị trí của header
    if(window.scrollY > 100){
        header.classList.add('scrolled'); //Thêm class scrolled khi cuộn
    }else{
        header.classList.remove('scrolled'); // Xóa màu header khi ở đầu trang
    }
});