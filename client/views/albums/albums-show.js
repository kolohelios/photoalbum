'use strict';

angular.module('photoalbum')
.controller('AlbumsShowCtrl', function($state, $scope, Album){
  $scope.albumKey = $state.params.name;
  $scope.album = Album.retrieveRecord($scope.albumKey);
  // $scope.album.$watch(function(){
  //   $scope.album = Album.retrieveRecord($scope.albumKey);
  //   $scope.photos = $scope.album.photos;
  // });
  $scope.photos = $scope.album.photos;

  var tempString;

  $scope.uploadImage = function(image){
    previewFile(image);
  };

  $scope.deletePhoto = function(imageKey){
    Album.deletePhoto(imageKey, $scope.albumKey);
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



  //
  // function packageFile(file){
  //   console.log(file);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = function () {
  //     console.log(reader.result);
  //     return reader.result;
  //   };
  // }

  // function unpackageFile(string){
  //   var reader = new FileReader();
  //   var preview = document.querySelector('img');
  //   preview.src = reader.result;
  // }



});
