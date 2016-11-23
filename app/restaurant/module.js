angular.module('restaurant', []);

angular.module('restaurant')
    .config(function($stateProvider){
        $stateProvider
            .state('restaurant', {
                url: '/restaurant',
                controller: 'restaurantCtrl',
                templateUrl: '../views/waitinglist.ejs',
                controllerAs: 'restaurantCtrl'
            });
    });
