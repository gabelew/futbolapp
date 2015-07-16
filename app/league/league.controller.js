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

    activate();

    function activate() {

      return gamesService.getRanking()
          .then(function (data) {
            vm.ranking = data;
            console.log(vm.ranking);
            return vm.ranking;

          });
      
      // return teamsService.getTeams()
      //   .then(function (data) {
      //     vm.teams = data;
      //     return vm.teams;
      //   });
    }
    

  }
})();
