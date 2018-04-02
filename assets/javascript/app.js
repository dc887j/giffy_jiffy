



var myTeams = ['Arizona Cardinals',
    'Atlanta Falcons',
    'Baltimore Ravens',
    'Buffalo Bills',
    'Carolina Panthers',
    'Chicago Bears',
    'Cincinnati Bengals',
    'Cleveland Browns',
    'Dallas Cowboys',
    'Denver Broncos',
    'Detroit Lions',
    'Green Bay Packers',
    'Houston Texans',
    'Indianapolis Colts',
    'Jacksonville Jaguars',
    'Kansas City Chiefs',
    'Los Angeles Rams',
    'Los Angeles Chargers',
    'Miami Dolphins',
    'Minnesota Vikings',
    'New England Patriots',
    'New Orleans Saints',
    'New York Giants',
    'New York Jets',
    'Oakland Raiders',
    'Philadelphia Eagles',
    'Pittsburgh Steelers',
    'San Francisco 49ers',
    'Seattle Seahawks',
    'Tampa Bay Buccaneers',
    'Tennessee Titans',
    'Washington Redskins'];
    
$(document).on('click', '.tv', function () {
    $("#gifs-appear-here").empty();


    var pickTeam = $(this).attr("data-tv");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pickTeam + "&api_key=CkqaY7Ki8HSszfuoC1ThzAebps3k7AQ0&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(response);


        for (var i = 0; i < results.length; i++) {


            if (true) {

                var gifDiv = $("<div class='item'>");


                var rating = results[i].rating;


                var p = $("<p>").text("Rating: " + rating);


                var teamImage = $("<img>");

                teamImage.attr("src", results[i].images.fixed_height_still.url);


                teamImage.attr('data-still', results[i].images.fixed_height_still.url);
                teamImage.attr('data-animate', results[i].images.fixed_height.url);
                teamImage.attr('data-state', 'still');


                gifDiv.append(p);
                gifDiv.append(teamImage);


                $("#gifs-appear-here").prepend(gifDiv);

            }
        }

    });
})


function renderButtons() {

    $("#team-space").empty();


    for (var i = 0; i < myTeams.length; i++) {


        var a = $("<button>");

        a.addClass("tv");

        a.attr("data-tv", myTeams[i]);

        a.text(myTeams[i]);

        $("#team-space").append(a);
    }
};


$("#add-a-team").on("click", function (event) {

    event.preventDefault();

    var nflTeam = $("#team-input").val().trim();

    myTeams.push(nflTeam);

    console.log(nflTeam);


    renderButtons();
});


$(document).on('click', 'img', function () {


    if ($(this).attr('data-state') == 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});


renderButtons();