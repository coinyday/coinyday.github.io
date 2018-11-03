// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

var submitEmail = document.getElementById('email-submit');
submitEmail.addEventListener("click", function() {
  console.log("Starting...")
  var emailInput = document.getElementById('email-input');
  db.collection("beta-emails").add({
    email: emailInput.value
  })
  emailInput.value = "";
  alert('You did it! We\'ll send you an email with any updates!');
});
