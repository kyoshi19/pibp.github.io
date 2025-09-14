(function (win) {
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

    .value('groups', [
      {
        name: "Club infantil OANSA",
        image: "src/img/ministerios/infantil/portada_index.jpg",
        buttonText: "Ver más",
        url: "ministerio-infantil"
      },
      {
        name: "Cambia tu rumbo",
        image: "src/img/ministerios/juvenil/portada_index.jpg",
        buttonText: "Ver más",
        url: "ministerio-juvenil"
      },
      {
        name: "Unión femenil",
        image: "src/img/ministerios/femenil/portada_index.jpg",
        buttonText: "Ver más",
        url: "union-femenil"
      },
      {
        name: "Unión varonil",
        image: "src/img/ministerios/varonil/portada_index.jpg",
        buttonText: "Ver más",
        url: "union-varonil"
      }])

    .value('programs', [
      {
        name: "El amor que vale",
        autor: "Dr. Adrian Rogers",
        schedule: "lunes a viernes 4:00pm",
        image: "src/img/radio/elamorquevale.png",
        content: "El pastor, maestro y autor Adrian Rogers ha presentado a personas de todo el mundo el amor de Jesucristo, y ha impactado un número incontable de vidas al presentar una verdad bíblica profunda."
      },
      {
        name: "Momento Desicivo",
        autor: "David Jeremiah",
        schedule: "lunes a viernes 3:00pm",
        image: "src/img/radio/momentodecisivo.png",
        content: "Buscar ayudar a las congregaciones locales a fortalecer a los creyentes para que estén \"siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros;\" (I Pedro 3:15)."
      },
      {
        name: "En contacto",
        autor: "Dr. Charles Stanley",
        schedule: "lunes a viernes 6:00pm",
        image: "src/img/radio/encontacto.png",
        content: "¿Anhela experimentar toda la presencia reconfortante, amor, el poder y la sabiduría del Señor? Eso es bueno, porque Dios le ama y quiere relacionarse de manera personal con usted para siempre"
      },
      {
        name: "La biblia dice",
        autor: "David Logacho",
        schedule: "lunes a sábado 10:30am",
        image: "src/img/radio/labibliadice.png",
        content: "La Biblia Dice… nació como Ministerio Internacional de Radio, el 2 de Febrero de 1970, como la respuesta a la necesidad de anunciar las Buenas Nuevas de Salvación y la Palabra de Dios en general a millones de hispanohablantes en América Latina, el Caribe y España."
      },
      {
        name: "Enfoque a la familia",
        autor: "Sixto Porras",
        schedule: "lunes a viernes 10:00am",
        image: "src/img/radio/enfoquealafamilia.png",
        content: "Cooperar con el Espíritu Santo para compartir el Evangelio de Jesucristo con la mayor cantidad de personas posible al nutrir y defender la institución de la familia ordenada por Dios y promover las verdades bíblicas en todo el mundo."
      },
    ])

    .value('creads',
      {
        title: "Declaración de fe",
        declarations: [
          { title: "Sobre la Biblia", content: "Creemos que la Santa Biblia es la Palabra de Dios, y que es la única regla de fe y práctica." },
          { title: "Sobre Dios", content: "Creemos en un Dios viviente, hacedor del cielo y de la tierra, y que es Espíritu infinito e inteligente; y que en la unidad de la Trinidad existen tres personas que son el Padre, el Hijo y el Espíritu Santo." },
          { title: "Sobre el hombre", content: "Creemos que el hombre fue creado en santidad, con libre albedrío, pero por su transgresión voluntaria cayó de su estado perfecto y necesita salvación." },
          { title: "Sobre Jesucristo", content: "Creemos que Cristo, el Hijo unigénito de Dios, murió en la cruz por nuestros pecados, fue sepultado, resucitó al tercer día y ascendió a la diestra de Dios para interceder por nosotros. Creemos que Cristo vendrá otra vez de acuerdo con su promesa." },
          { title: "Sobre El Espíritu Santo", content: "Creemos que el Espíritu Santo es la tercera persona de la Trinidad, quien convence de pecado, regenera, ilumina, reviste de poder, sella, consuela, y guía a los creyentes." },
          { title: "Sobre la salvación", content: "Creemos que la salvación es por gracia por medio de la fe, y no depende de obras buenas que el hombre puede hacer. Los dos requisitos indispensables para la salvación son el arrepentimiento y la fe." },
          { title: "Sobre la iglesia", content: "Creemos que una iglesia verdadera de cristianos es una asamblea de creyentes en Cristo bautizados después de una profesión de fe, comprometidos en mantener las ordenanzas del bautismo (por inmersión) y la cena del Señor conforme a las Escrituras. Reconociendo a Cristo como la única cabeza, tomando la Biblia como su única regla de fe y práctica." }
        ]
      })
    ;

}(window));