'use strict';

angular.module('photoalbum')
.controller('AlbumsNewCtrl', function(Album, $state, $scope, $window){

  Album.init();

  $scope.addAlbum = function(album){
    album.favorite = '';
    album.createdDate = $window.Firebase.ServerValue.TIMESTAMP;
    Album.new(album);
    $state.go('albums.list');
  };


});
