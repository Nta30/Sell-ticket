//Kiểm tra xem người dùng login chưa
const menuAccounts = document.querySelectorAll('.account');
const isLoggedIn = localStorage.getItem('isLogin') === 'true';

for(const menuAccount of menuAccounts){
    menuAccount.addEventListener('click', (event) => {
        event.preventDefault();
        if(isLoggedIn){
            window.location.href = './account/account.html';
        }else{
            window.location.href = './login-form/login.html';
        }
    });
}