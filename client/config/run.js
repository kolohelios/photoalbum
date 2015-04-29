'use strict';

angular.module('photoalbum')
.run(function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
});
