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

      scope.ministerios = [{
          "nombre": "ADMINISTRACIÓN",
          "imagen": "src/img/administracion.png",
          "descripcion": "Se encarga de la gestión administrativa y logística de la iglesia, asegurando que los recursos se manejen correctamente y que las operaciones diarias funcionen sin contratiempos.",
          "versiculo": "Sé diligente en conocer el estado de tus ovejas, y mira con cuidado por tus rebaños. - Proverbios 27:23",
          "comisiones": ["Finanzas", "Administrador", "Mantenimiento", "Secretaría"]
        },
        {
          "nombre": "ADORACIÓN",
          "imagen": "src/img/adoracion.png",
          "descripcion": "Dirige la alabanza y adoración dentro de la iglesia, guiando a la congregación a conectarse con Dios a través de la música, la oración y los sacramentos.",
          "versiculo": "Servid a Jehová con alegría; venid ante su presencia con regocijo. - Salmo 100:2",
          "comisiones": ["Música y Adoración", "Oración", "Ujieres", "Bautismos", "Cena del Señor"]
        },
        {
          "nombre": "COMUNIÓN",
          "imagen": "src/img/comunion.png",
          "descripcion": "Fomenta la unidad y el compañerismo entre los miembros de la iglesia, organizando actividades recreativas, eventos especiales y visitaciones a quienes necesitan apoyo.",
          "versiculo": "Y considerémonos unos a otros para estimularnos al amor y a las buenas obras, no dejando de congregarnos. - Hebreos 10:24-25",
          "comisiones": ["Recreación y Días Especiales", "Visitación"]
        },
        {
          "nombre": "PROCLAMACIÓN",
          "imagen": "src/img/proclamacion.png",
          "descripcion": "Se enfoca en llevar el mensaje del Evangelio fuera de la iglesia, a través del evangelismo, misiones, medios de comunicación y ministerios para jóvenes y adultos.",
          "versiculo": "Id por todo el mundo y predicad el evangelio a toda criatura.  - Marcos 16:15",
          "comisiones": ["Evangelismo", "Misiones", "Radio, TV, Cabina, Sonido, Redes Sociales", "Unión Femenil", "Unión Varoníl", "Ministerio Juvenil"]
        },
        {
          "nombre": "EDIFICACIÓN",
          "imagen": "src/img/edificacion.png",
          "descripcion": "Se dedica al crecimiento espiritual de la congregación mediante la enseñanza bíblica, formación de líderes y ministerios enfocados en niños y jóvenes.",
          "versiculo": "A fin de capacitar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo. - Efesios 4:12",
          "comisiones": ["EBDM", "CEBEBCA", "Ministerio Infantil"]
        },
        {
          "nombre": "SERVICIO",
          "imagen": "src/img/servicio.png",
          "descripcion": "Atiende las necesidades prácticas de la comunidad y de la iglesia, organizando asistencia social, distribución de alimentos y apoyo en eventos comunitarios.",
          "versiculo": "Porque tuve hambre y me disteis de comer; tuve sed y me disteis de beber; fui forastero y me recogisteis. - Mateo 25:35",
          "comisiones": ["Obra Social", "Bolsas Alimento", "Almuerzo Dominical"]
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