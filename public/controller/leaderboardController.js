// Execute functions when leaderboard page is loaded
window.onload = () => {
    createLeaderboardNav();
    createLeaderboardContainer();
    retrieveScores().then(displayInformation);
    formatTables();
}