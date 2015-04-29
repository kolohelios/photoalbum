'use strict';

angular.module('photoalbum')
.controller('AlbumsNewCtrl', function(Album, $state, $scope){

  Album.init();

  $scope.addAlbum = function(album){
    console.log('works');
    Album.new(album);
  };

  
});
