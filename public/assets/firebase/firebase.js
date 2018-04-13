
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
  
  database.ref('visits').once('value').then(function(snapshot) {
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

  var dt = new Date();
  var utcDate = dt.toUTCString();

  database.ref('visits').set({
    count: count,
    timestamp: utcDate
  });

}

function getNumberOfClicks(category, link) {
  console.log(category);
    console.log(link);

  database.ref(category + "/" + link).once('value').then(function(snapshot) {

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
  var dt = new Date();
  var utcDate = dt.toUTCString();

  database.ref(category + "/" + link).set({
    count: count,
    timestamp: utcDate
  });
}


getNumberOfVisits();


$(document).ready(function() {

    $("a").click(function(event) {
      var id = event.target.id;
      var cls = $('#'+id).attr('class');


      getNumberOfClicks(cls, id);
    });
})




