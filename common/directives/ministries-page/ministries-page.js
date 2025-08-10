(function (win) {
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

      scope.ministerios = [
        {
          nombre: 'Adoración',
          verso: '“Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.”Juan 4:24',
          descripcion: 'Dirige a la congregación en la alabanza y adoración a Dios, promoviendo una vida de devoción sincera.',
          comisiones: ['🎸 Música y alabanza', '🙏 Oración', '🤝 Ujieres', '🍞 Cena del Señor']
        },
        {
          nombre: 'Finanzas',
          verso: '“Honra a Jehová con tus bienes, y con las primicias de todos tus frutos.” Proverbios 3:9',
          descripcion: 'Administra fielmente los recursos económicos de la iglesia con integridad y transparencia.',
          comisiones: []
        },
        {
          nombre: 'Proclamación',
          verso: '“Id por todo el mundo y predicad el evangelio a toda criatura.” Marcos 16:15',
          descripcion: 'Enfocado en la difusión del evangelio y el discipulado de diferentes grupos.',
          comisiones: ['🔥 Jóvenes', '🕊️ Evangelismo', '👨‍👦 Unión Varonil', '👩‍🦰 Unión Femenil']
        },
        {
          nombre: 'Infantil',
          verso: '“Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de Dios.” Lucas 18:16',
          descripcion: 'Enseña a los niños las verdades de la Palabra de Dios con amor y creatividad.',
          comisiones: []
        },
        {
          nombre: 'Educación Cristiana',
          verso: '“Y enseñándoles que guarden todas las cosas que os he mandado.” Mateo 28:20',
          descripcion: 'Forma discípulos por medio del estudio sistemático de la Biblia.',
          comisiones: ['📖 Escuela Dominical']
        },
        {
          nombre: 'Multimedia',
          verso: '“Y será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin.” Mateo 24:14',
          descripcion: 'Apoya técnica y visualmente los cultos y la comunicación de la iglesia.',
          comisiones: ['📻 Transmisión radial', '🎙️ Sonido y multimedia', '📱 Redes sociales']
        },
        {
          nombre: 'Compañerismo',
          verso: '“Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.” Hechos 2:42',
          descripcion: 'Fomenta la unidad del cuerpo de Cristo a través de eventos y momentos de comunión.',
          comisiones: []
        },
        {
          nombre: 'Labor Social',
          verso: '“Porque tuve hambre, y me disteis de comer; tuve sed, y me disteis de beber; fui forastero, y me recogisteis.” Mateo 25:35',
          descripcion: 'Ofrece voluntariado y ayuda a la comunidad.',
          comisiones: []
        }
      ];

      scope.seleccionarMinisterio = function (min) {
        scope.ministerioSeleccionado = min;
      };


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