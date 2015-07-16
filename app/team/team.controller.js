(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('TeamCtrl', TeamCtrl);

  TeamCtrl.$inject = ['teamsService', 'gamesService'];

  function TeamCtrl (teamsService, gamesService) {
    var vm = this;

  }
})();