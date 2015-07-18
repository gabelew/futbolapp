(function () {
  angular
  .module('futbolApp')
  .config(config);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
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
    .when('/games/:gameId', {
      controller: 'GameCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/game/game.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }
})();

