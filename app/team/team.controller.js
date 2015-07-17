(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('TeamCtrl', TeamCtrl);

  TeamCtrl.$inject = ['teamsService', 'gamesService', '$routeParams'];

  function TeamCtrl (teamsService, gamesService, $routeParams) {
    var vm = this;
    vm.team = {};

    activate();

    function activate() {
      teamsService.getTeam($routeParams.teamId)
        .then(function (data) {
          vm.team = data;
        });
      gamesService.getWinLoss($routeParams.teamId)
        .then(function (data) {
          vm.team.winLoss = data; 
        });
      gamesService.getTeamRanking($routeParams.teamId)
        .then(function (data) {
          vm.team.ranking = data;
        });     
    }

  }
})();