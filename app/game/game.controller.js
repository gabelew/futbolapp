(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('GameCtrl', GameCtrl);

  GameCtrl.$inject = ['gamesService', 'goalsService', '$routeParams'];

  function GameCtrl (gamesService, goalsService, $routeParams) {
    var vm = this;

    activate();

    function activate () {
      gamesService.getGame($routeParams.gameId)
        .then(function (data) {
          vm.game = data;
        });

      goalsService.getGameGoals($routeParams.gameId)
        .then(function (data) {
          vm.gameGoals = data;
        });
    }
  }
})();