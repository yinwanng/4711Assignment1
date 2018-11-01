displayInformation = (scores) => {
    var tableData = "<tr><td>Username</td><td>Score</td>";
    scores.forEach(d => {
        console.log(`${d.username}, ${d.score}`);
        // document.createElement("")
        // document.write('<tr><td>', 
        //                  `${d.username}`, '</td><td>',
        //                  `${d.score}`, '</td></tr>');
                         
        tableData += "<tr><td>" + `${d.username}` + "</td><td>" + `${d.score}` + "</td></tr>";
    });
    $("#rankTable").append(tableData);  
}

formatTables = () => {
    $("#rankTable td").css("padding-right", "100px");
}

