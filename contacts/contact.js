document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contactform form');
  const inputs = document.querySelectorAll('.contactform input, .contactform textarea');
  const emailInput = form.querySelector('input[type="email"]');
  const phoneInput = form.querySelector('input[type="tel"]');
  const messageTextarea = form.querySelector('textarea');

  inputs.forEach(input => {
      // Thay đổi màu border khi người dùng nhập
      input.addEventListener('input', function() {
          input.style.borderColor = '#ff1a1a';
          input.style.boxShadow = '0 0 10px rgba(255, 46, 46, 0.5)';
      });
  });

  // Kiểm tra khi gửi biểu mẫu
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Ngăn chặn gửi biểu mẫu ngay lập tức
      let isValid = true; // Biến kiểm tra hợp lệ

      // Kiểm tra từng trường
      inputs.forEach(input => {
          if (!input.value.trim()) { // Nếu trường để trống
              showError(input, 'This field is required');
              isValid = false;
          } else if (input === emailInput && !validateEmail(input.value)) {
              showError(input, 'Please enter a valid email address');
              isValid = false;
          } else if (input === phoneInput && !validatePhone(input.value)) {
              showError(input, 'Please enter a valid phone number');
              isValid = false;
          } else {
              clearError(input); // Xóa lỗi nếu hợp lệ
          }
      });

      // Nếu hợp lệ, gửi biểu mẫu
      if (isValid) {
          form.submit();
      }
  });

  // Hiển thị lỗi
  function showError(input, message) {
      input.style.borderColor = '#e50914';
      input.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
      let error = input.nextElementSibling;
      if (!error || !error.classList.contains('error-message')) {
          error = document.createElement('div');
          error.className = 'error-message';
          input.insertAdjacentElement('afterend', error);
      }
      error.textContent = message;
  }

  // Xóa lỗi
  function clearError(input) {
      input.style.borderColor = '#e50914';
      input.style.boxShadow = 'none';
      const error = input.nextElementSibling;
      if (error && error.classList.contains('error-message')) {
          error.remove();
      }
  }

  // Kiểm tra email
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  // Kiểm tra số điện thoại
  function validatePhone(phone) {
      const regex = /^[0-9]{10,}$/; // Số điện thoại gồm ít nhất 10 chữ số
      return regex.test(phone);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.form-group input');

  inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);

      // Nếu đã có giá trị từ đầu, thêm class 'filled'
      if (input.value.trim()) {
          input.classList.add('filled');
      }
  });

  function handleFocus(event) {
      const input = event.target;
      input.classList.add('filled');  // Khi input có focus, di chuyển nhãn lên
  }

  function handleBlur(event) {
      const input = event.target;
      if (!input.value.trim()) {
          input.classList.remove('filled');  // Nếu input trống, di chuyển nhãn về chỗ cũ
      }
  }
});
