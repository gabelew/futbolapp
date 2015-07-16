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
    // .when('/teams/:teamId', {
    //   controller: 'TeamController',
    //   templateUrl: 'views/team.html'
    // })
    .otherwise({
      redirectTo: '/teams'
    });
  }
})();

