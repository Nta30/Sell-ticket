// Lấy dữ liệu người dùng từ localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

    document.querySelector('.username-display').innerText = userData.username;
    document.querySelector('.useremail-display').innerText = userData.email;

// Lấy nút đăng xuất và thêm sự kiện
const logoutBtn = document.querySelector('.log-out-btn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userData');
    localStorage.setItem('isLogin', false);

    // Chuyển hướng về trang đăng nhập
    window.location.href = '../login-form/login.html';
});
