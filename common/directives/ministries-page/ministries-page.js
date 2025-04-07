(function(win) {
    'use strict';
  
    //  info page directive
    function ministriesPage($log, isEmpty, bgValue, filter) {
  
      var directive = {
        restrict: 'E',
        templateUrl: 'common/directives/ministries-page/ministries-page.html',
        scope: {
          data: "="
        },
        link: linkFunc
      };
      return directive;
  
      function linkFunc(scope) {
  
        $log.debug('[ministriesPageDirective] initializing...');
  
        function setup() {
  
          $log.debug('[ministriesPageDirective] is ready...');
  
        }
  
        setup();
  
      }
    }
  
    /* --> CONFIGURATION <-- */
  
    ministriesPage.$inject = [
      '$log',
      'isEmptyFilter',
      'bgValueFilter',
      '$filter'
    ];
  
    /* --> MODULE <-- */
  
    win.MainApp.Directives
      .directive('ministriesPage', ministriesPage);
  
  })(window);