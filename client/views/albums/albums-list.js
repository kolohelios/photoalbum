  'use strict';

angular.module('photoalbum')
.controller('AlbumsListCtrl', function($scope, Album, $rootScope){
  console.log('AlbumsListCtrl');

  Album.init();

  $scope.deleteAlbum = function(album){
    $rootScope.album.$remove(album);
  };

});
