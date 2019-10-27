var favorites = ["baseball", "tennis", "soccer", "football", "esports"];
var userSearch;

function renderFavorites() {
    $(".favorites-display").empty();
    for (var i = 0; i < favorites.length; i++) {
        var btn = $("<button>");
        btn.addClass("favorite btn btn-outline-secondary");
        btn.attr("data-name", favorites[i]);
        btn.text(favorites[i]);
        $(".favorites-display").append(btn)
    }
}

$("#submit").on("click", function(event){
    event.preventDefault();
    userSearch = $("#search").val().trim();
    if (userSearch !== "") {
        favorites.push(userSearch);
        renderFavorites();
        $("#search").fadeOut(20);
        $("#search").val("");
        $("#search").fadeIn(300);
    } else{
        console.log("You didn't enter anything...")
    };
})

$(".btn").on("click", function(){
    console.log("test")
    var btnText = $(this).val();
    btnText = btnText.replace(/\s/g, "")
    console.log(btnText);
    var apiKey = "5sO9rKbLKobaF7JHFPtGwPKdE5w37eb5";
    var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + btnText + "&limit=10";
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (i = 0; i < response.data.length; i++) {
            var imageUrl = response.data[i].images.downsized_large.url;
        console.log(imageUrl);
        var image = $("<img>");
        image.attr("src", imageUrl);
        image.attr("alt", "image");
        $(".giphy-display").prepend(image);
        }
    })
});


renderFavorites();

