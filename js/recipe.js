var apiKey = "2fecaffd34d74567cc8225f296bcbec1";
var appID = "5ae54cff";
var dishSearch = "";

$("#search-button").on("click", function(event){
    
    event.preventDefault();

    dishSearch = $("#search-bar").val();


    $.ajax({
        url: "https://api.edamam.com/search?q=" + dishSearch + "&app_id=" + appID + "&app_key=" + apiKey,
        method: "GET",
    })
    .then(response => {
        console.log(response);
        for (var i = 0; i < 10; i++)
        {
            $("#receipe-view").append("<div id = 'photo'>")
            //still working on it make each photo it's own container and add text, also make it clickable.
            $("#recipe-view").append("<img src='" + response.hits[i].recipe.image + " class= 'card-panel hoverable' ' width = '20%' id = 'image"+i+"'>");
            //$("img").append("<p>Hello World</p>");
            //$("#recipe-view").append('<div class="card-panel hoverable" width = "20%" id = "image' + i + '> Hoverable Card Panel</div>');
            //$("#recipe-view").append("<div style='background: url("+response.hits[i].recipe.image+")'  id='image"+i+"'>");

            console.log(response.hits[i].recipe.calories);
        }
    });
});

// width='20%'