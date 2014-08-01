function validatePassword(password) {
  if (password.length < 6 || password.length > 12) {
    $('.error').html('Password must be between 6 and 12 characters');
    showNotice('.error');
    return false;
  } else {
    return true;
  }
}
