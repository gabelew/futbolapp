(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('PlayerCtrl', PlayerCtrl);

  PlayerCtrl.$inject = ['playersService', 'goalsService', '$routeParams'];

  function PlayerCtrl(playersService, goalsService, $routeParams) {
    var vm = this;

    activate();

    function activate() {
      playersService.getPlayer($routeParams.playerId)
        .then(function (data) {
          vm.player = data;
        });

      goalsService.getPlayerGoals($routeParams.playerId)
        .then(function (data) {
          vm.playerGoals = data;
        });
    }

  }

})();