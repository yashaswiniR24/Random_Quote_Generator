$(document).ready(function() {
  // Random Quote API
  $("#new-quote").click(async function() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    $("#quote").text(`"${data.content}"`);
    $("#author").text(`— ${data.author}`);
  });

  // Form validation
  $("#feedbackForm").submit(function(e) {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert("All fields are required!");
      e.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      e.preventDefault();
    } else {
      $("#successMsg").fadeIn().delay(1500).fadeOut();
    }
  });
});
