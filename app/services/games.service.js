(function () {
  'use strict';

  angular
  .module('futbolApp')
  .factory('gamesService', gamesService);

  gamesService.$inject = ['$http'];

  function gamesService($http) {
    return {
       getGames: getGames,
       getRanking: getRanking
    };

    function getRanking() {
      var games = [];
      var outcomeObj = {};
      var rankingArr = [];
      return getGames()
        .then (function (data) {
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

  }

})();