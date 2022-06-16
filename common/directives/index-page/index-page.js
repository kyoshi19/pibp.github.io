(function(win) {
  'use strict';

  //  index page directive
  function indexPage($log, isEmpty, bgValue, filter) {

    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/index-page/index-page.html',
      scope: {
        data: "="
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope) {

      $log.debug('[indexPageDirective] initializing...');

      /* --> VALUES <-- */

      scope.scheduleBoxes = {
        hideLeftBox: false,
        hideMiddleLeftBox: true,
        hideMiddleRightBox: true,
        hideRightBox: false
      }

      /* --> METHODS <-- */

      scope.hideScheduleBox = function(boxIndex) {

        if (boxIndex) {
          scope.scheduleBoxes.hideRightBox = !scope.scheduleBoxes.hideRightBox;
          scope.scheduleBoxes.hideMiddleLeftBox = !scope.scheduleBoxes.hideMiddleLeftBox;

        } else {
          scope.scheduleBoxes.hideLeftBox = !scope.scheduleBoxes.hideLeftBox;
          scope.scheduleBoxes.hideMiddleRightBox = !scope.scheduleBoxes.hideMiddleRightBox;
        }


      }


      function setup() {

        $log.debug('[indexPageDirective] is ready...');

      }

      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  indexPage.$inject = [
    '$log',
    'isEmptyFilter',
    'bgValueFilter',
    '$filter'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('indexPage', indexPage);

})(window);