angular.module('exampleapp')
    .component('home',{
        restrict: 'E',
        scope: {},
        templateUrl: 'home/home.html',
        controller: HomeController
    });

    function HomeController() {
        var vm = this;
        vm.message = 'Welcome Home!';
    }