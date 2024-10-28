window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    //Kiểm tra vị trí của header
    if(window.scrollY > 100){
        header.classList.add('scrolled'); //Thêm class scrolled khi cuộn
    }else{
        header.classList.remove('scrolled'); // Xóa màu header khi ở đầu trang
    }
});

//Kiểm tra xem người dùng login chưa
const menuAccount = document.querySelector('.account');
const isLoggedIn = localStorage.getItem('isLogin') === 'true';

menuAccount.addEventListener('click', (event) => {
    event.preventDefault();
    if(isLoggedIn){
        window.location.href = './account/account.html';
    }else{
        window.location.href = './login-form/login.html';
    }
});