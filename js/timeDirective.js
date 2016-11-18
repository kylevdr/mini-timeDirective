angular.module('app').directive('showTime', function() {
    return {

        restrict: 'AE',
        template: '<div>The current time is {{time | date : "short"}}. </div>',
        link: function(scope, element, attrs) {
            var currentTime = new Date();
            scope.time = currentTime;
        }
    };
});