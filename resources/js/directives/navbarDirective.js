var app = angular.module('sunhorizonenergy');


app.directive('mynavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'resources/html/navbar.html'
    }
})