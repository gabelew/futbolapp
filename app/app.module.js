(function () {
  angular.module('GoFutbol', ['ngRoute']);
})();

// .config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//   .when('/teams', {
//     controller: 'LeagueController',
//     templateUrl: 'views/league.html'
//   })
//   // .when('/teams/:teamId', {
//   //   controller: 'TeamController',
//   //   templateUrl: 'views/team.html'
//   // })
//   .otherwise({
//     redirectTo: '/teams'
//   });
// }]);