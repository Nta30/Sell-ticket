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