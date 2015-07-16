(function () {
  angular
  .module('futbolApp')
  .config(config);

  function config ($routeProvider) {
    $routeProvider
    .when('/teams', {
      controller: 'LeagueCtrl',
      controllerAs: 'league',
      templateUrl: 'app/league/league.html'
    })
    .when('/teams/:teamId', {
      controller: 'TeamCtrl',
      controllerAs: 'team',
      templateUrl: 'app/team/team.html'
    })
    .otherwise({
      redirectTo: '/teams'
    });
  }
})();

