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
        });
      playersService.getPlayers($routeParams.teamId)
        .then(function (data) {
          vm.players = data;
        });

    }

  }
})();