function newUser() {
  var email = $('#new-user').find('input[type="email"]').val().toLowerCase();
  var password = $('#new-user').find('input[type="password"]').val();
  $('#new-user').find('input').val('');

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
      location.hash = '#login';
      $('#new-user').hide();
      $('#new-session').fadeIn();
    },
    error: function(err) {
      $('.error').html($(err.responseText).find('h2').html());
      showNotice('.error');
      console.log(err)
    }
  });
}


function validatePassword(password) {
  if (password.length < 6 || password.length > 12) {
    $('.error').html('Password must be between 6 and 12 characters');
    showNotice('.error');
    return false;
  } else {
    return true;
  }
}
