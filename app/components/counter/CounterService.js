angular.module('app').service('CounterService',
    function ($timeout) {
        var _this = this;

        this.counter = 0;
        this.start = function () {
            if (this.timer) {
                return;
            }
            this.increaseCounter();
        };

        this.increaseCounter = function () {
            this.timer = $timeout(function () {
                _this.counter++;
                _this.increaseCounter();
            }, 1000)
        };

        this.stop = function () {
            if (this.timer) {
                $timeout.cancel(this.timer);
                this.timer = null;
            }
        }
    });