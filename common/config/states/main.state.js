//En este bloque config solo se configuran las rutas
angular
  .module(appName)
  .config(config);

config.$inject = [
  '$stateProvider',
];

function config($stateProvider) {

  $stateProvider.state('index', {
    url: '/index',
    templateUrl: 'common/templates/main.html'
  });

  $stateProvider.state('info', {
    url: '/info',
    templateUrl: 'common/templates/info.html'
  });

  $stateProvider.state('en-linea', {
    url: '/en-linea',
    templateUrl: 'common/templates/en-linea.html'
  });

  $stateProvider.state('radio', {
    url: '/radio',
    templateUrl: 'common/templates/radio.html'
  });

  $stateProvider.state('anuncios', {
    url: '/anuncios',
    templateUrl: 'common/templates/anuncios.html'
  });

  $stateProvider.state('recursos', {
    url: '/recursos',
    templateUrl: 'common/templates/recursos.html'
  });

  $stateProvider.state('blog', {
    url: '/blog',
    templateUrl: 'common/templates/blog.html'
  });

  $stateProvider.state('contacto', {
    url: '/contacto',
    templateUrl: 'common/templates/contacto.html'
  });


}
