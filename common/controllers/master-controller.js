(function (win) {
  'use strict';

  var masterController = function (log, storage, $state) {

    log.debug('[masterController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM

    var vm = this;
    vm.storage = storage;
    vm.storage.messages = [];
    vm.fullYear = new Date().getFullYear();

    vm.gotoState = function (state) {
      $state.transitionTo(state);
    }

    vm.getMenuClass = function (state) {
      if (state == $state.$current.name) {
        return "header-menu-active"
      }
      return "header-menu"
    }

    var setup = function () {

    };

    setup();

  };
  masterController.$inject = [
    '$log',
    '$sessionStorage',
    '$state'
  ];

  win.MainApp.Controllers
    .controller('masterController', masterController);

}(window));