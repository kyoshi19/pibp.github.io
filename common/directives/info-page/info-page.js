(function(win) {
    'use strict';
  
    //  info page directive
    function infoPage($log, isEmpty, bgValue, filter) {
  
      var directive = {
        restrict: 'E',
        templateUrl: 'common/directives/info-page/info-page.html',
        scope: {
          data: "="
        },
        link: linkFunc
      };
      return directive;
  
      function linkFunc(scope) {
  
        $log.debug('[infoPageDirective] initializing...');
  
        /* --> VALUES <-- */
  
        scope.scheduleBoxes = {
          hideLeftBox: false,
          hideMiddleLeftBox: true,
          hideMiddleRightBox: true,
          hideRightBox: false
        }
        scope.src = '../../../src/';
  
        /* --> METHODS <-- */
  
        scope.hideScheduleBox = function(boxinfo) {
  
          if (boxinfo) {
            scope.scheduleBoxes.hideLeftBox = !scope.scheduleBoxes.hideLeftBox;
            scope.scheduleBoxes.hideMiddleRightBox = !scope.scheduleBoxes.hideMiddleRightBox;
            
          } else {
            scope.scheduleBoxes.hideRightBox = !scope.scheduleBoxes.hideRightBox;
            scope.scheduleBoxes.hideMiddleLeftBox = !scope.scheduleBoxes.hideMiddleLeftBox;
          }
  
  
        }
  
  
        function setup() {
  
          $log.debug('[infoPageDirective] is ready...');
  
        }
  
        setup();
  
      }
    }
  
    /* --> CONFIGURATION <-- */
  
    infoPage.$inject = [
      '$log',
      'isEmptyFilter',
      'bgValueFilter',
      '$filter'
    ];
  
    /* --> MODULE <-- */
  
    win.MainApp.Directives
      .directive('infoPage', infoPage);
  
  })(window);