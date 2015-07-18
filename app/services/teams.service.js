(function () {
  'use strict';

  angular
  .module('futbolApp')
  .factory('teamsService', teamsService);

  teamsService.$inject = ['$http'];

  function teamsService($http) {
    return {
       getTeams: getTeams,
       getTeam: getTeam,
       getTeamName: getTeamName
    };

    function getTeams () {
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

    function getTeamName (teamId) {
      return getTeam(teamId)
        .then(function (data) {
          return data.name;
        });
    }

    function getTeam (teamId) {
      return $http.get('https://futbol-api.goguardian.com/teams/' + teamId)
        .then(getTeamSuccess)
        .catch(getTeamFailed);

      function getTeamSuccess (response) {
        return response.data;
      }

      function getTeamFailed (err) {
        console.log('XHR Failed for getTeam ' + teamId, err);
      }
    }

  }

})();