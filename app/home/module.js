angular.module('home', []);

angular.module('home')
  .controller('HomeCtrl', HomeCtrl)
  .config($stateProvider => {
      $stateProvider
        .state('home', {
          url: '/home',
          controller: 'HomeCtrl',
          templateUrl: 'home/home.html',
          controllerAs: 'home'
        });
  });

function HomeCtrl() {
  this.message = 'Bitwise Says Hello.';
}
