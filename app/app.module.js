angular.module('app', [
    "ui.bootstrap",
    'ui.router',
    'home',
    'restaurant'
])
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');
    })
    .run(function () {

    });
