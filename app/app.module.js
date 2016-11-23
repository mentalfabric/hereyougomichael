angular.module('app', [
    "ui.bootstrap",
    'ui.router',
    'home'
])
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');
    })
    .run(function () {

    });
