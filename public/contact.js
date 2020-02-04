var firebaseConfig = {
  apiKey: "AIzaSyAQJm8QU5d_6DBSqD2HuB_mSarnHcb6sAs",
  authDomain: "bycyril1.firebaseapp.com",
  databaseURL: "https://bycyril1.firebaseio.com",
  projectId: "bycyril1",
  storageBucket: "bycyril1.appspot.com",
  messagingSenderId: "911777868868",
  appId: "1:911777868868:web:846a62ea7ee95f8a3e6011"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("contactForm").addEventListener("submit", submitForm);
document.getElementById("contactForm").addEventListener("resetBtn", resetForm);

function getInputVal(id) {
  return document.getElementById(id).value;
}

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");
  sendForm(name, email, message);
}

function resetForm(e) {
  e.preventDefault();
}

function sendForm(name, email, message) {
  var reportRef = firebase
    .database()
    .ref("ByCyril")
    .child("messages");

  var newReport = reportRef.push();

  newReport.set({
    name: name,
    email: email,
    message: message,
    timestamp: Date.now()
  });

  document.querySelector(".alert").style.display = "block";

  document.getElementById("contactForm").reset();
}
