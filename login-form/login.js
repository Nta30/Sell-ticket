const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', (event) => {
    wrapper.classList.add('active');
    event.preventDefault();
});

loginLink.addEventListener('click', (event) => {
    wrapper.classList.remove('active');
    event.preventDefault();
});

function validUserName(username) {
    var userPattern = /^[A-Za-z0-9_]{4,}$/;
    return userPattern.test(username);
}

function validEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validPassword(password) {
    var passwordPattern = /^(?=.*[A-Za-z]).{6,}$/;
    return passwordPattern.test(password);
}

// Đăng kí tài khoản
function RegisterForm() {
    var username = document.getElementById('username').value;
    var email2 = document.getElementById('email2').value;
    var password2 = document.getElementById('password2').value;
    var terms = document.getElementById('terms').checked;

    if (!validUserName(username)) {
        alert("Username không hợp lệ !");
        return false;
    }
    if (!validEmail(email2)) {
        alert("Đinh dạng email không hợp lệ !");
        return false;
    }
    if (!validPassword(password2)) {
        alert("Password không hợp lệ !");
        return false;
    }
    if (!terms) {
        alert("Bạn cần đồng ý với điều khoản và điều kiện !");
        return false;
    }

    const userData = {
        username: username,
        email: email2,
        password: password2
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Đăng kí thành công ! \n Vui lòng đăng nhập");
    wrapper.classList.remove('active'); //Quay trở lại login

    return true;
}

// Đăng nhập
function loginForm() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    console.log("Dữ liệu đăng nhập:", { email: loginEmail, password: loginPassword });
    console.log("Dữ liệu lưu trữ:", storedUserData);

    if (storedUserData &&
        storedUserData.email === loginEmail &&
        storedUserData.password === loginPassword) {
        
        localStorage.setItem('isLogin', true);
        alert("Đăng nhập thành công");
        window.location.href = '../index.html';
        return true;
    } else {
        alert("Sai tài khoản hoặc mật khẩu !");
        return false;
    }
}
