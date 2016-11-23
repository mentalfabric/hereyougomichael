angular.module('home', []);

angular.module('home')
  .config(function($stateProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          controller: 'HomeCtrl',
          templateUrl: '../views/home.html',
          controllerAs: 'home',
          css: '../less/home.less'
        });
  });
