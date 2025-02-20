$(document).ready(function () {
    const $emailInput = $('#email');
    const $usernameInput = $('#username');
    const $passwordInput = $('#password');
    const $confirmPasswordInput = $('#confirmPassword');
    const $loginButton = $('#loginButton');

    const $emailError = $('#emailError');
    const $usernameError = $('#usernameError');
    const $passwordError = $('#passwordError');
    const $confirmPasswordError = $('#confirmPasswordError');

    // Validation functions
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        return emailRegex.test(email);
    }

    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z]+$/;
        return usernameRegex.test(username) && username.length >= 3 && username.length <= 20;
    }

    function validatePassword(password) {
        return password.length >= 8 && password.length <= 20;
    }

    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Event listeners for real-time validation
    $emailInput.on('input', validateForm);
    $usernameInput.on('input', validateForm);
    $passwordInput.on('input', validateForm);
    $confirmPasswordInput.on('input', validateForm);

    function validateForm() {
        let isValid = true;

        // Validate Email
        if (!validateEmail($emailInput.val())) {
            $emailError.text('Please enter a valid Northeastern email address.');
            isValid = false;
        } else {
            $emailError.text('');
        }

        // Validate Username
        if (!validateUsername($usernameInput.val())) {
            $usernameError.text('Username must contain only letters and be 3-20 characters long.');
            isValid = false;
        } else {
            $usernameError.text('');
        }

        // Validate Password
        if (!validatePassword($passwordInput.val())) {
            $passwordError.text('Password must be 8-20 characters long.');
            isValid = false;
        } else {
            $passwordError.text('');
        }

        // Validate Confirm Password
        if (!validateConfirmPassword($passwordInput.val(), $confirmPasswordInput.val())) {
            $confirmPasswordError.text('Passwords do not match.');
            isValid = false;
        } else {
            $confirmPasswordError.text('');
        }

        // Enable/Disable Login Button
        $loginButton.prop('disabled', !isValid);
    }

    // Form submission
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();
        const username = $usernameInput.val();
        window.location.href = `calculator.html?username=${encodeURIComponent(username)}`; // Redirect with username
    });
});