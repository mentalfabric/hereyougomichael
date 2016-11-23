
angular.module('home')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($http) {
    var vm = this;

    vm.customersWaiting = $http({
      method: "GET",
      url: "/guests"
    })
      .then( users => {
        vm.customersWaiting = users.data;
      });

    console.log('change');
    vm.tables = $http({
      method: "GET",
      url: "/tables/find-all-tables"
    })
      .then( tables => {
        vm.tables = tables.data;
      });
  }
