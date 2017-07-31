angular.module('exampleapp')
  .component('about', {
    restrict: 'E',
    scope: {},
    templateUrl: 'about/about.html',
    controller: AboutController
  });
  
  function AboutController() {
    var vm = this;
    vm.message = 'Hi from about';
  };