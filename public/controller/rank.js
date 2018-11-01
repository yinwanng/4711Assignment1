window.onload = () => {
    retrieveScores().then(displayInformation);
    formatTables();
}