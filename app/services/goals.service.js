(function () {
  angular
  .module('futbolApp')
  .service('goalsService', goalsService);

  goalsService.$inject = ['$http'];

  function goalsService ($http) {
    return {
      getGoals: getGoals,
      getPlayerGoals: getPlayerGoals,
      getGameGoals: getGameGoals
    };

    function getGoals () {
      return $http.get('https://futbol-api.goguardian.com/goals')
        .then(getGoalsSuccess)
        .catch(getGoalsFailed);

      function getGoalsSuccess (response) {
        return response.data;
      }

      function getGoalsFailed (err) {
        return 'XHR failed for getGoals' + err;
      }
    }

    function getPlayerGoals (playerId) {
      return $http.get('https://futbol-api.goguardian.com/players/' + playerId + '/goals')
        .then(getPlayerGoalsSuccess)
        .catch(getPlayerGoalsFailed);

      function getPlayerGoalsSuccess (response) {
        return response.data;
      }

      function getPlayerGoalsFailed (err) {
        return 'XHR failed for getPlayerGoals' + err;
      }
    }

    function getGameGoals (gameId) {
      return $http.get('https://futbol-api.goguardian.com/matches/' + gameId + '/goals')
        .then(getGameGoalsSuccess)
        .catch(getGameGoalsFailed);

      function getGameGoalsSuccess (response) {
        return response.data;
      }

      function getGameGoalsFailed (err) {
        return 'XHR failed for getPlayerGoals' + err;
      }
    }
  }

})();