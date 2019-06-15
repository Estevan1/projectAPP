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
            $("#recipe-view").append("<div id='image"+i+"' data-name='"+i+"'    class='recipeImage card-panel hoverable' style='background: url("+ response.hits[i].recipe.image +")'>"+ response.hits[i].recipe.label +"</div>");

            console.log(response.hits[i].recipe.calories);
            
        }

        $(".recipeImage").on("click", function(){
            var food = $(this).attr('data-name');

            $("#recipe-view").empty();

            $("#recipe-view").append('<div id="card3" class="card-panel teal">')
            $("#card3").append("<div class='recipeImage2' style='background: url("+ response.hits[food].recipe.image +")'>"+ response.hits[food].recipe.label +"</div>");
            //$("#recipe-view").append("<img src='" + response.hits[food].recipe.image + "' width = '300px' height = '300px' id = 'image"+i+"'>");

            
            $("#card3").append("<p id = 'info header'> Diet Style: "+ response.hits[food].recipe.healthLabels +"</p>");

            /**********************************************************************************************************************/
            $("#recipe-view").append('<div id="card" class="card-panel red">')
            $("#card").append("<ul id ='nutList'>")
            for(var j = 0; j < response.hits[food].recipe.digest.length; j++)
            {
                var num = Math.round(response.hits[food].recipe.digest[j].total);
                $("#nutList").append("<div id = 'info'>" + response.hits[food].recipe.digest[j].label+": "+num+"</div>");
            }
            /**********************************************************************************************************************/
            $("#recipe-view").append('<div id="card2" class="card-panel purple">')
            $("#card2").append("<ol id ='indgredients'>")
            for(var k = 0; k < response.hits[food].recipe.ingredientLines.length; k++)
            {
                
                $("#indgredients").append("<p id = 'info'>" + response.hits[food].recipe.ingredientLines[k]+"</p>");
            }

            $("#recipe-view").append("<a id='link-button' href='"+ response.hits[food].recipe.url+"' class='waves-effect waves-light btn-small'>Click Here For Instructions</a>")
            console.log(food);
            
        });
    });


});