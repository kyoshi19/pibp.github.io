(function(win) {
  'use strict';

  win.MainApp.Values
    .value('patterns', {
      notePattern: /\[([^\]]*)\]|\:([^\]]*)\}/g
    })

    .value('menuOptions', [
      {
        title: "INICIO",
        url: "index"
      },
      {
        title: "NOSOTROS",
        url: "info"
      },
      {
        title: "MINISTERIOS",
        url: "ministerios"
      },
      {
        title: "TV EN LINEA",
        url: "en-linea"
      },
      {
        title: "RADIO",
        url: "radio"
      },
      {
        title: "ANUNCIOS",
        url: "anuncios"
      },
      {
        title: "RECURSOS",
        url: "recursos"
      },
      {
        title: "BLOG",
        url: "blog"
      },
      {
        title: "CONTACTO",
        url: "contacto"
      }
    ])

    .value('programs', [
      {
        name: "El amor que vale",
        autor: "Dr. Adrian Rogers",
        schedule: "lunes a viernes 4:00pm",
        image:"src/img/radio/elamorquevale.png",
        content: "El pastor, maestro y autor Adrian Rogers ha presentado a personas de todo el mundo el amor de Jesucristo, y ha impactado un número incontable de vidas al presentar una verdad bíblica profunda."
      },
      {
        name: "Momento Desicivo",
        autor: "David Jeremiah",
        schedule: "lunes a viernes 3:00pm",
        image:"src/img/radio/momentodecisivo.png",
        content: "Buscar ayudar a las congregaciones locales a fortalecer a los creyentes para que estén \"siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros;\" (I Pedro 3:15)."
      },
      {
        name: "En contacto",
        autor: "Dr. Charles Stanley",
        schedule: "lunes a viernes 6:00pm",
        image:"src/img/radio/encontacto.png",
        content: "¿Anhela experimentar toda la presencia reconfortante, amor, el poder y la sabiduría del Señor? Eso es bueno, porque Dios le ama y quiere relacionarse de manera personal con usted para siempre"
      },
      {
        name: "La biblia dice",
        autor: "David Logacho",
        schedule: "lunes a sábado 10:30am",
        image:"src/img/radio/labibliadice.png",
        content: "La Biblia Dice… nació como Ministerio Internacional de Radio, el 2 de Febrero de 1970, como la respuesta a la necesidad de anunciar las Buenas Nuevas de Salvación y la Palabra de Dios en general a millones de hispanohablantes en América Latina, el Caribe y España."
      },
      {
        name: "Enfoque a la familia",
        autor: "Sixto Porras",
        schedule: "lunes a viernes 10:00am",
        image:"src/img/radio/enfoquealafamilia.png",
        content: "Cooperar con el Espíritu Santo para compartir el Evangelio de Jesucristo con la mayor cantidad de personas posible al nutrir y defender la institución de la familia ordenada por Dios y promover las verdades bíblicas en todo el mundo."
      },
    ]);

}(window));