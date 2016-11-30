angular.module('app', [
    'templates',
    'ui.router',
    'welcome',
    'home'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/welcome');
  })
  .run(function () {

  });
