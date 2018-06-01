
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQJm8QU5d_6DBSqD2HuB_mSarnHcb6sAs",
  authDomain: "bycyril1.firebaseapp.com",
  databaseURL: "https://bycyril1.firebaseio.com",
  projectId: "bycyril1",
  storageBucket: "",
  messagingSenderId: "911777868868"
};

firebase.initializeApp(config);

var database = firebase.database();

function getNumberOfVisits() {
  let date = getTimeStamp();

  database.ref('visits/' + String(date)).once('value').then(function(snapshot) {
    if (snapshot.val() == null) {
      this.updateVisitCount(1);
    } else {
      var count = snapshot.val().count;
      count++;
      this.updateVisitCount(count);
    }
  });
}

function updateVisitCount(count) {

  let date = getTimeStamp();

  database.ref('visits/' + String(date)).set({
    count: count,
    timestamp: getTimeStamp()
  });

}

function getNumberOfClicks(category, link) {
  let date = String(getTimeStamp());

  database.ref(category + "/" + link + "/" + date).once('value').then(function(snapshot) {

    if (snapshot.val() == null) {
        this.updateClickCount(category, link, 1);
    } else {

      var count = snapshot.val().count;
      count++;
      this.updateClickCount(category, link, count);

    }
  });
}

function updateClickCount(category, link, count) {

  database.ref(category + "/" + link).set({
    count: count,
    timestamp: getTimeStamp(),
    link: link
  });
}

function getTimeStamp() {

  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var timestamp;

  if (hour > 12) {
    hour = hour - 12;
    timestamp = month + "-" + day + "-" + year + " " + hour + ":" + min + "PM";

  } else {
    timestamp = month + "-" + day + "-" + year + " " + hour + ":" + min + "AM";
  }

  return timestamp;
}

getNumberOfVisits();


$(document).ready(function() {

    $("a").click(function(event) {

      var id = event.target.id;
      var cls = $('#'+id).attr('class');
      getNumberOfClicks(cls, id);

    });
})




