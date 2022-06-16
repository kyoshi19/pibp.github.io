(function(win) {
  'use strict';

  //  index page directive
  function audioPlayer($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/audio-player/audio-player.html',
      scope: {
        data: "="
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope) {

      $log.debug('[audioPlayerDirective] initializing...');

      /* --> VALUES <-- */

      scope.player = {};

      /* --> METHODS <-- */

      scope.togglePlay = function() {
        if (scope.audio.paused) {
          scope.audio.play();
        } else{
          scope.audio.pause();
        }
        scope.audioControl;
      }

      function setup() {
       
        $log.debug(scope);

        $log.debug('[audioPlayerDirective] is ready...');

      }

      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  audioPlayer.$inject = [
    '$log'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('audioPlayer', audioPlayer);

})(window);