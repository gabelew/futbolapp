(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('GameCtrl', GameCtrl);

  GameCtrl.$inject = ['gamesService', 'goalsService', '$routeParams', 'teamsService', 'playersService'];

  function GameCtrl (gamesService, goalsService, $routeParams, teamsService, playersService) {
    var vm = this;

    activate();

    function activate () {
      gamesService.getGame($routeParams.gameId)
        .then(function (data) {
          vm.game = data;
          vm.game.teamNames = [];
          // Get team names from the game team ids array
          teamsService.getTeamName(vm.game.teamIds[0])
            .then(function (data) {
              vm.game.teamNames[0] = data;
            });
          teamsService.getTeamName(vm.game.teamIds[1])
            .then(function (data) {
              vm.game.teamNames[1] = data;
            });
        });

      goalsService.getGameGoals($routeParams.gameId)
        .then(function (data) {
          vm.gameGoals = data;
          angular.forEach(vm.gameGoals, function(goal, index) {
            teamsService.getTeamName(goal.teamId)
              .then(function (data) {
                goal.teamName = data;
              });
            playersService.getPlayerName(goal.playerId)
              .then(function (data) {
                goal.playerName = data;
              });
          });
        });
    }
  }
})();