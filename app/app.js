(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider,$locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
               .when('/', {
                  template: '<home></home>'
               })
               .when('/timer', {
                  template: '<counter></counter>'
               })

        });
}());