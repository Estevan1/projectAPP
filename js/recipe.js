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
        $("#recipe-view").empty();
        console.log(response);
        for (var i = 0; i < 10; i++)
        {
            $("#receipe-view").append("<div id = 'photo'>")
            //still working on it make each photo it's own container and add text, also make it clickable.

            //
            //$("img").append("<p>Hello World</p>");
            //$("#recipe-view").append('<div class="card-panel hoverable" width = "20%" id = "image' + i + '> Hoverable Card Panel</div>');
            //$("#recipe-view").append("<div ; width:'300px'; height:'300px'' class='card-panel hoverable' width='300px' height='300px' id='image"+i+"'></div>");
            $("#recipe-view").append("<div id='image"+i+"' data-name='"+i+"'    class='recipeImage card-panel hoverable' style='background: url("+ response.hits[i].recipe.image +")'>"+ response.hits[i].recipe.label +"</div>");

            console.log(response.hits[i].recipe.calories);
            
        }

        $(".recipeImage").on("click", function(){
            var food = $(this).attr('data-name');

            $("#recipe-view").empty();

            $("#recipe-view").append("<img src='" + response.hits[food].recipe.image + "' width = '300px' height = '300px' id = 'image"+i+"'>");
            $("#recipe-view").append("<p id = 'info header'> Diet Style:</p>");
            // $("#recipe-view").append("<br>")
            $("#recipe-view").append("<p id = 'info'>" + response.hits[food].recipe.healthLabels+"</p>");

            for(var j = 0; j < response.hits[food].recipe.digest.length; j++)
            {
                $("#recipe-view").append("<ul id ='nutList'>")
                $("#nutList").append("<div id = 'info'>" + response.hits[food].recipe.digest[j].label+":</div>");
                var num = Math.round(response.hits[food].recipe.digest[j].total);
                $("#nutList").append("<div id = 'info'>" +num+"</div>");
            }

            for(var k = 0; k < response.hits[food].recipe.ingredientLines.length; k++)
            {
                $("#recipe-view").append("<ol id ='indgredients'>")
                $("#indgredients").append("<p id = 'info'>" + response.hits[food].recipe.ingredientLines[k]+"</p>");
            }

            $("#recipe-view").append("<a href='"+ response.hits[food].recipe.url+"' class='waves-effect waves-light btn-small'>Click Here For Instructions</a>")
            console.log(food);
            
        });
    });


});