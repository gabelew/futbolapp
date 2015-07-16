(function () {
  'use strict';

  angular
  .module('futbolApp')
  .factory('teamsService', teamsService);

  teamsService.$inject = ['$http'];

  function teamsService($http) {
    return {
       getTeams: getTeams
    };

    function getTeams() {
      return $http.get('https://futbol-api.goguardian.com/teams')
        .then(getTeamsSuccess)
        .catch(getTeamsFailed);

      function getTeamsSuccess (response) {
        return response.data;
      }

      function getTeamsFailed (err) {
        console.log('XHR Failed for getTeams.' + err);
      }
    }
  }

})();