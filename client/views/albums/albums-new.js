'use strict';

angular.module('photoalbum')
.controller('AlbumsNewCtrl', function(Album, $state, $scope){

  Album.init();

  $scope.addAlbum = function(album){
    Album.new(album);
    $state.go('albums.list');
  };


});
