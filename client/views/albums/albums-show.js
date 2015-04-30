'use strict';

angular.module('photoalbum')
.controller('AlbumsShowCtrl', function($state, $scope, Album){
  $scope.albumKey = $state.params.name;
  Album.retrieveRecord($scope.albumKey);
  console.log($scope.album);
  // $scope.album.$loaded().then(function(){
  //   $scope.photos = $scope.album.photos;
  // });

  var tempString;

  $scope.uploadImage = function(image){
    previewFile(image);
  };

  $scope.deletePhoto = function(imageIndex){
    Album.deletePhoto(imageIndex, $scope.albumKey);
  };

  $scope.setFavorite = function(){
    Album.setFavorite($scope.favoritePhoto, $scope.albumKey);
  };

  function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      tempString = reader.result;
      Album.addPhoto(tempString, $scope.albumKey);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }
});
