(function () {
  'use strict';

  angular
  .module('futbolApp')
  .factory('playersService', playersService);

  playersService.$inject = ['$http'];

  function playersService($http) {
    return {
      getPlayers: getPlayers,
      getPlayer: getPlayer,
      getPlayerName: getPlayerName
    };

    function getPlayers (teamId) {
      return $http.get('https://futbol-api.goguardian.com/teams/' + teamId + '/players')
        .then(getPlayersSuccess)
        .catch(getPlayersFailed);

        function getPlayersSuccess (response) {
          return response.data;
        }

        function getPlayersFailed (err) {
          console.log('XHR failed for getPlayers' + err);
        }
    }

    function getPlayer (playerId) {
      return $http.get('https://futbol-api.goguardian.com/players/' + playerId)
      .then(getPlayerSuccess)
      .catch(getPlayerFailed);

      function getPlayerSuccess (response) {
        return response.data;
      }

      function getPlayerFailed (err) {
        console.log('XHR failed for getPlayer' + err);
      }
    }

    function getPlayerName (playerId) {
      return getPlayer(playerId)
        .then(function (data) {
          return data.name;
        });
    }
  }
})();