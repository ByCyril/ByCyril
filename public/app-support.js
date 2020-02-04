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

document.getElementById("reportForm").addEventListener("submit", submitForm);

function getInputVal(id) {
  return document.getElementById(id).value;
}

function getInputFromDropdownMenu(id) {
  var e = document.getElementById(id);
  return e.options[e.selectedIndex].text;
}

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var appName = getInputFromDropdownMenu("app");
  var report = getInputVal("report");
  sendForm(name, email, appName, report);
}

function sendForm(name, email, appName, report) {
  var reportRef = firebase
    .database()
    .ref(appName)
    .child("reports");

  var newReport = reportRef.push();

  newReport.set({
    name: name,
    email: email,
    appName: appName,
    report: report,
    timestamp: Date.now()
  });

  document.querySelector(".alert").style.display = "block";

  document.getElementById("reportForm").reset();
}
