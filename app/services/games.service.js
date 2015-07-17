(function () {
  'use strict';

  angular
  .module('futbolApp')
  .factory('gamesService', gamesService);

  gamesService.$inject = ['$http'];

  function gamesService($http) {
    return {
       getGames: getGames,
       getRanking: getRanking,
       getWinLoss: getWinLoss,
       getTeamRanking: getTeamRanking,
       getTeamGames: getTeamGames
    };


    function getGames() {
      return $http.get('https://futbol-api.goguardian.com/matches')
        .then(getGamesSuccess)
        .catch(getGamesFailed);

      function getGamesSuccess (response) {
        return response.data;
      }

      function getGamesFailed (err) {
        console.log('XHR Failed for getGames.' + err);
      }
    }

    function getTeamGames(teamId) {
      var allGames = [];
      var teamGames = [];
      return getGames()
        .then(function (data) {
          allGames = data;
          for (var i = 0; i < games.length; i++) {
            if (teamOne != teamTwo 
              && (teamOne == teamId || teamTwo == teamId)) {
              teamGames.push(games[i]);
            }
          }
          return teamGames;
        });
    }

    function getWinLoss(teamId) {
      var games = [];
      var teamWinLoss = {"wins" : 0, "losses" : 0};
      return getGames()
        .then(function (data) {
          games = data;
          for (var i = 0; i < games.length; i++) {
            var teamOne = games[i].teamIds[0];
            var teamTwo = games[i].teamIds[1];
            if (!games[i].wasTie && teamOne != teamTwo 
              && (teamOne == teamId || teamTwo == teamId)) {
              if(teamId == games[i].winnerTeamId) {
                teamWinLoss["wins"]++;
              } else {
                teamWinLoss["losses"]++;
              }
            }
          }
          return teamWinLoss;
        });
    }

    function getRanking() {
      var games = [];
      var outcomeObj = {};
      var rankingArr = [];
      return getGames()
        .then(function (data) {
          games = data;
          // Calculate outcome from each match and put into outcomeObj
          for (var i = 0; i < games.length; i++) {
              var teamOne = games[i].teamIds[0];
              var teamTwo = games[i].teamIds[1];
            if (!games[i].wasTie && teamOne != teamTwo) {
              if (!outcomeObj.hasOwnProperty(teamOne)) outcomeObj[teamOne] = 0;
              if (!outcomeObj.hasOwnProperty(teamTwo)) outcomeObj[teamTwo] = 0;

              if (teamOne == games[i].winnerTeamId) {
                outcomeObj[teamOne]++;
                outcomeObj[teamTwo]--;
              } else {
                outcomeObj[teamOne]--;
                outcomeObj[teamTwo]++;
              }
              
            }
          }

          // Sort ranking by converting obj to array
          for (var team in outcomeObj) rankingArr.push([team, outcomeObj[team]]);
          rankingArr.sort(function (a, b) { return b[1] - a[1] });
          return rankingArr;  
        });
    }

    function getTeamRanking(teamId) {
      var rankingArr = [];
      var ranking = -1;
      return getRanking()
        .then(function (data) { 
          rankingArr = data;
          for (var i = 0; i < rankingArr.length; i++) {
            var team = parseInt(rankingArr[i][0]);
            if (team == teamId) {
              ranking = i + 1;
            }
          }
          return ranking;
        });  
    }

  }
})();