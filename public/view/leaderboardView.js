displayInformation = (scores) => {
    let tableData = "<tr><th>Rank #</th><th>Username</th><th>Score</th>";
    let rank = 1;                   
    scores.forEach(d => {
        // console.log(`${d.username}, ${d.score}`);   
        tableData += "<tr><td>" + rank + "</td><td>" + `${d.username}` + "</td><td>" + `${d.score}` + "</td></tr>";
        rank++;
    });
    $("#rankTable").append(tableData);  
}

formatTables = () => {
    $("#rankTable td").css("padding-right", "100px");
}

createLeaderboardNav = () => {
    let navHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNav">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active">' +
        '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="hangman.html">Play Hangman</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="/logout">Log Out</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</nav>';
    $('body').append(navHTML);
}

createLeaderboardContainer = () => {
    let containHTML = ' <div class="container">' +
        '<div id="rankContainer">' +
        '<h1>Leaderboard - Top 10</h1>' +
        '<table id="rankTable" class="table table-stripped">' +
        '</table>' +
        '</div>' +
        '</div>';
    $('body').append(containHTML);
}