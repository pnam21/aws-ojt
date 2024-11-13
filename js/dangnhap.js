const loginForm = document.querySelector('form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

// Hiển thị thông báo lỗi
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Hiển thị khi thành công
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	const small = formControl.querySelector('small');
	small.innerText = '';
}

// Kiểm tra độ dài của tên đăng nhập và mật khẩu
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// Kiểm tra các trường bắt buộc
function checkRequired(inputArr) {
	let isRequired = false;
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
			isRequired = true;
		} else {
			showSuccess(input);
		}
	});
	return isRequired;
}

// Lấy tên của trường nhập liệu
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Xử lý sự kiện khi gửi form
loginForm.addEventListener('submit', function (e) {
	e.preventDefault();
	if (!checkRequired([loginUsername, loginPassword])) {
		checkLength(loginUsername, 3, 15);
		checkLength(loginPassword, 6, 25);
		// Add logic here to verify username and password
		// For example, you can call an API or compare with predefined values
	}
});
