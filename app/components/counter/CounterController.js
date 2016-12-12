angular.module('app').controller('CounterController',
    function (CounterService) {
        this.timer = CounterService;
    });