document.getElementById("redirect").onclick = function () {
    location.href = "recipesearch.html";
};

document.getElementById("logo1").onclick = function () {
    location.href = "index.html";
};

var config = {
    apiKey: "AIzaSyAboVqYTWPvz0cal-1dqpG1fNN4CJ46oWw",
    authDomain: "secret-ingridient.appspot.com",
    databaseURL: "https://secret-ingridient.firebaseio.com/",
    storageBucket: "gs://secret-ingridient.appspot.com"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var email = "";
  var comment= "";

  $("#submit-comment").on("click", function(event)
  {
    event.preventDefault();

    name = $("#fullname").val().trim();
    email = $("#email").val().trim();
    comment = $("#subject").val().trim();

    database.ref().set({
        name: name,
        email: email,
        comment: comment
    });
    $("#fullname").empty();
    $("#email").empty();
    $("#subject").empty();
  });