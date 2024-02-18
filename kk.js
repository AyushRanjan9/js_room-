function validateForm() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var password = document.getElementById('password').value;

    // Check if any field is left blank
    if (name === '' || address === '' || pincode === '' || password === '') {
        alert('Please fill out all fields');
        return false;
    }

    // Check if pincode is numeric and has 6 digits
    if (!/^\d{6}$/.test(pincode)) {
        alert('Pincode must be numeric and contain 6 digits');
        return false;
    }

    // Check password constraints
    if (!/[A-Z]/.test(password)) {
        alert('Password must contain at least 1 capital letter');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }

    // If all validations pass, the form is submitted
    alert('Form submitted successfully!');
    return true;
}
