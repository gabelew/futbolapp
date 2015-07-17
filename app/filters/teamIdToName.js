// Temporary solution for quick teamId to team name filter
(function () {
  'use strict';

  angular
  .module('futbolApp')
  .filter('teamIdToName', teamIdToName);

  teamIdToName.$inject = ['teamsService'];

  function teamIdToName(teamsService) {
    return function (teamId) {
      if (teamId == 1)
        return "GoGuardian Steelers";
      if (teamId == 2)
        return "Secure Lees";
      if (teamId == 3)
        return "Happy Aras";
      if (teamId == 4)
        return "School of LANS";
    };
  }
})();