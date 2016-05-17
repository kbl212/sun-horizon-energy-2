var app = angular.module('sunhorizonenergy');


app.directive('myfooter', function () {
    return {
        restrict: 'E',
        templateUrl: 'resources/html/footer.html'
    }
})