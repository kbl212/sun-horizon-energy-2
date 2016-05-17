var app = angular.module('sunhorizonenergy', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'resources/php/home.php',
            controller: 'homeCtrl'
        })
        .when('/benefits', {
            templateUrl: 'resources/php/benefits.php',
            controller: 'benefitsCtrl'
        })
        .when('/contact', {
            templateUrl: 'resources/php/contact.php',
            controller: 'contactCtrl'
        })
        .when('/financingoptions', {
            templateUrl: 'resources/php/financingoptions.php',
            controller: 'financingoptionsCtrl'
        })
        .when('/getstarted', {
            templateUrl: 'resources/php/getstarted.php',
            controller: 'getstartedCtrl'
        })
        .when('/about', {
            templateUrl: 'resources/php/about.php',
            controller: 'aboutCtrl'
        })
        .when('/itstherighttime', {
            templateUrl: 'resources/php/itstherighttime.php',
            controller: 'itstherighttimeCtrl'
        })
        .when('/jobopenings', {
            templateUrl: 'resources/php/jobopenings.php',
            controller: 'jobopeningsCtrl'
        })
        .when('/ourteam', {
            templateUrl: 'resources/php/ourteam.php',
            controller: 'ourteamCtrl'
        })
        .when('/productinnovation', {
            templateUrl: 'resources/php/productinnovation.php',
            controller: 'productinnovationCtrl'
        })
        .when('/taxincentives', {
            templateUrl: 'resources/php/taxincentives.php',
            controller: 'taxincentivesCtrl'
        })
        .when('/whatsnew', {
            templateUrl: 'resources/php/whatsnew.php',
            controller: 'whatsnewCtrl'
        })
        .when('/whysolar', {
            templateUrl: 'resources/php/whysolar.php',
            controller: 'whysolarCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);