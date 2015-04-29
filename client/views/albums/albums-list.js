'use strict';

angular.module('photoalbum')
.controller('AlbumsListCtrl', function($scope, Album){
  console.log('AlbumsListCtrl');

  Album.init();


});
