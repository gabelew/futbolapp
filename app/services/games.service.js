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
      var rankingObj = {};
      return getGames()
        .then (function (data) {
          games = data;
          //console.log(data);
          // Calculate outcome from each match
          for (var i = 0; i < games.length; i++) {
            if (!games[i].wasTie) {
              var teamOne = games[i].teamIds[0];
              var teamTwo = games[i].teamIds[1];
              if (!rankingObj.hasOwnProperty(teamOne)) rankingObj[teamOne] = 0;
              if (!rankingObj.hasOwnProperty(teamTwo)) rankingObj[teamTwo] = 0;

              if (teamOne == games[i].winnerTeamId) {
                rankingObj[teamOne]++;
                rankingObj[teamTwo]--;
              } else {
                rankingObj[teamOne]--;
                rankingObj[teamTwo]++;
              }
              
            }
          }
          return rankingObj;  
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