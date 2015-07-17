(function () {
  angular
  .module('futbolApp')
  .config(config);

  function config ($routeProvider) {
    $routeProvider
    .when('/teams', {
      controller: 'LeagueCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/league/league.html'
    })
    .when('/teams/:teamId', {
      controller: 'TeamCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/team/team.html'
    })
    .when('/players/:playerId', {
      controller: 'PlayerCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/player/player.html'
    })
    .otherwise({
      redirectTo: '/teams'
    });
  }
})();

