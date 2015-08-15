(function() {
  'use strict';
  angular.module('fl.accounts-cookie', ['angular-meteor']).run(run);

  run.$inject = ['$rootScope', '$meteor'];

  function run($rootScope, $meteor) {
    $rootScope.logout = function() {
      return $meteor.logout().then(function() {
        Meteor.logoutWithCookie();
      });
    };

    $rootScope.loginWithCookie = Meteor.loginWithCookie;
  }
})();