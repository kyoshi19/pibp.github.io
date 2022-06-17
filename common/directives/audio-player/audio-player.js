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
        } else {
          scope.audio.pause();
        }

      }

      scope.getVolumeIcon = function() {
        if (scope.audio.volume == 0) {
          return 'fa-volume-xmark'
        }
        if (scope.audio.volume <= 0.5) {
          return 'fa-volume-low'
        }
        return 'fa-volume-high'
      }

      scope.getProgressPercentage = function(){
        return {width:((scope.audio.currentTime * 100) / scope.audio.duration) +'%'};
      }

      function initAudio() {
        scope.audio = ngAudio.load("src/audio/SoundHelix-Song-2.mp3");
        scope.audio.setVolume(1);
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