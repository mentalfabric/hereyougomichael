
angular.module('home')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($http) {
    var vm = this;

    vm.helloWorld = "Hello World";
  }
