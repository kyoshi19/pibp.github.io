(function(win) {
  'use strict';

  //  index page directive
  function audioPlayer($log, ngAudio) {

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


      /* --> METHODS <-- */

      scope.togglePlay = function() {
        if (scope.audio.paused) {
          scope.audio.play();
        } else{
          scope.audio.pause();
        }
        scope.audioControl;
      }

      function initAudio() {
        scope.audio = ngAudio.load("https://listen.181fm.com/181-90salt_128k.mp3");
        scope.audio.play();
      }

      function setup() {
       
        initAudio();

        $log.debug(scope);

        $log.debug('[audioPlayerDirective] is ready...');

      }

      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  audioPlayer.$inject = [
    '$log',
    'ngAudio'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('audioPlayer', audioPlayer);

})(window);