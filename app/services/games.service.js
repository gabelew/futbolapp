// (function () {
//   'use strict';

//   angular
//   .module('futbolApp')
//   .factory('gamesService', gamesService);

//   gamesService.$inject = ['$http'];

//   function gamesService($http) {
//     return {
//        getGames: getGames
//     };

//     function getGames() {
//       return $http.get('https://futbol-api.goguardian.com/matches')
//         .then(getGamesSuccess)
//         .catch(getGamesFailed);

//       function getGamesSuccess (response) {
//         return response.data.results;
//       }

//       function getGamesFailed (err) {
//         return 'XHR Failed for getGames.' + err;
//       }
//     }
//   }

// })();