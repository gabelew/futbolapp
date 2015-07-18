(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('TeamCtrl', TeamCtrl);

  TeamCtrl.$inject = ['teamsService', 'gamesService'
                    , 'playersService', '$routeParams'];

  function TeamCtrl (teamsService, gamesService
                  , playersService, $routeParams) {
    var vm = this;
    vm.teamInfo = {};

    activate();

    function activate() {
      teamsService.getTeam($routeParams.teamId)
        .then(function (data) {
          vm.teamInfo = data;
        });
      gamesService.getGameDetails($routeParams.teamId)
        .then(function (data) {
          vm.gameDetails = data;
          // Get team names for each game from team ids array
          angular.forEach(vm.gameDetails.games, function(game, index) {
            game.teamNames = [];
            var teamOne = game.teamIds[0];
            var teamTwo = game.teamIds[1];
            teamsService.getTeamName(teamOne)
              .then(function (data) {
                game.teamNames[0] = data;
              });
            teamsService.getTeamName(teamTwo)
              .then(function (data) {
                game.teamNames[1] = data;
              });
          });
        });
      playersService.getPlayers($routeParams.teamId)
        .then(function (data) {
          vm.players = data;
        });

    }

  }
})();