displayInformation = (scores) => {
    let container = document.getElementById("rankContainer");
    // console.log(scores);
    document.write('<table>',
         '<tr><td>Username</td>',
         '<td>Score</td>');
         
    scores.forEach(d => {
        console.log(`${d.username}, ${d.score}`);
        // document.createElement("")
        document.write('<tr><td>', 
                         `${d.username}`, '</td><td>',
                         `${d.score}`, '</td></tr>');
                         
    });
    document.write('</table>'); 
    
    
}