$(document).ready(function () {

  // Quote fetch
  $('#getQuote').click(function () {
    $.get('https://api.quotable.io/random', function (data) {
      $('#quote').fadeOut(200, function () {
        $(this).text(data.content + " — " + data.author).fadeIn(200);
      });
    });
  });

  // Signup form validation
  $('#signupForm').submit(function (e) {
    let email = $('input[name="email"]').val();
    let pass = $('input[name="password"]').val();
    if (!email || !pass) {
      alert("Please fill all fields!");
      e.preventDefault();
    } else if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      alert("Invalid email format!");
      e.preventDefault();
    } else if (pass.length < 6) {
      alert("Password must be at least 6 characters!");
      e.preventDefault();
    }
  });
});
