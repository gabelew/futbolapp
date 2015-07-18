(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('PlayerCtrl', PlayerCtrl);

  PlayerCtrl.$inject = ['playersService', 'goalsService', '$routeParams', 'teamsService'];

  function PlayerCtrl(playersService, goalsService, $routeParams, teamsService) {
    var vm = this;

    activate();

    function activate() {
      playersService.getPlayer($routeParams.playerId)
        .then(function (data) {
          vm.player = data;
          teamsService.getTeamName(vm.player.teamId)
            .then(function (data) {
              vm.player.teamName = data;
            });
        });

      goalsService.getPlayerGoals($routeParams.playerId)
        .then(function (data) {
          vm.playerGoals = data;
        });
    }

  }

})();