(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('GameCtrl', GameCtrl);

  GameCtrl.$inject = ['gamesService', '$routeParams'];

  function GameCtrl (gamesService, $routeParams) {
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