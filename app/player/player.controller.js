(function () {
  'use strict';

  angular
  .module('futbolApp')
  .controller('PlayerCtrl', PlayerCtrl);

  PlayerCtrl.$inject = ['playersService', '$routeParams'];

  function PlayerCtrl(playersService, $routeParams) {
    var vm = this;

    activate();

    function activate() {
      playersService.getPlayer($routeParams.playerId)
        .then(function (data) {
          vm.player = data;
        });
    }

  }

})();