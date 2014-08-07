function showNotice(div) {
  if ($(div).html() != '') {
    $(div).fadeIn();
    setTimeout(function() {
      $(div).fadeOut();
    }, 3000);
  }
}

function logout() {
  $.ajax({
    url: '/sessions',
    method: 'delete',
    success: function(data) {
      console.log(data);
      $('.notice').html('Successfully logged out.');
      showNotice('.notice');
    }
  })
}

function navigation() {
  $('#login').click(function() {
    hideContent();
    $('#new-session').fadeIn();
  });

  $('#signup').click(function() {
    hideContent();
    $('#new-user').fadeIn();
  });
}

function hideContent() {
  var currentContents = $('.content').children();
  currentContents.hide();
}
