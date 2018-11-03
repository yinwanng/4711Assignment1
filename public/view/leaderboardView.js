displayInformation = (scores) => {
    var tableData = "<tr><td>#</td><td>Username</td><td>Score</td>";
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