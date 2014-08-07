function newUser() {
  var email = $('#new-user').find('input[type="email"]').val().toLowerCase();
  var password = $('#new-user').find('input[type="password"]').val();

  if (validatePassword(password) === true) {
    createUser(email, password);
  }
}

function createUser(email, password) {
  $.ajax({
    url: 'users',
    method: 'post',
    dataType: 'json',
    data: { user: { email: email, password: password } },
    success: function(data) {
      $('.notice').html('User successfully created. Please log in.');
      showNotice('.notice');
    },
    error: function(err) {
      $('.error').html($(err.responseText).find('h2').html());
      showNotice('.error');
      console.log(err)
    }
  });
}
