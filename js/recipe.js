var apiKey = "2fecaffd34d74567cc8225f296bcbec1";
var appID = "5ae54cff";
var dishSearch = "";

$.ajax({
    url: "https://api.edamam.com/search?q=" + dishSearch + "&app_id=" + appID + "&app_key=" + apiKey,
    method: "GET",
}).then(response => {
        console.log(response);

    });