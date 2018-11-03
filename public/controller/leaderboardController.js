window.onload = () => {
    createLeaderboardNav();
    createLeaderboardContainer();
    retrieveScores().then(displayInformation);
    formatTables();
}