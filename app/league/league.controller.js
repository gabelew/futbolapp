(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('LeagueCtrl', LeagueCtrl);

  LeagueCtrl.$inject = ['teamsService', 'gamesService'];

  function LeagueCtrl (teamsService, gamesService) {
    var vm = this;
    vm.teams = [];
    vm.ranking = [];
    vm.rankedTeams = [];

    activate();

    function activate() {
      return teamsService.getTeams()
        .then(function (data) {
          vm.teams = data;
          gamesService.getRanking()
          .then(function (data) {
            vm.ranking = data;
            for (var i = 0; i < vm.ranking.length; i++) {
              vm.rankedTeams.push(vm.teams[parseInt(vm.ranking[i][0]) - 1]);
            }
            console.log(vm.teams, vm.rankedTeams);

          });
        })  
      
    }
    

  }
})();
