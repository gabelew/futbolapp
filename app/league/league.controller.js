(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('LeagueCtrl', LeagueCtrl);

  LeagueCtrl.$inject = ['teamsService'];

  function LeagueCtrl (teamsService) {
    var vm = this;
    vm.teams = [];

    activate();

    function activate() {
      return teamsService.getTeams()
        .then(function (data) {
          vm.teams = data;
          return vm.teams;
        });
    }
    

  }
})();
