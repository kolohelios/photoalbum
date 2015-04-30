'use strict';

angular.module('photoalbum')
.factory('Album', function($rootScope, $firebaseArray, $firebaseObject){

  var fbAlbum;
  var afAlbum;

  var fbAlbums;
  var afAlbums;

  var fbAlbumRec;
  var afAlbumRec;

  function Album(){

  }

  Album.init = function(){
    fbAlbum = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/albums/');
    afAlbum = $firebaseArray(fbAlbum);
    afAlbum.$loaded().then(function(){
      $rootScope.album = afAlbum;
    });
 };

  Album.new = function(album){
    afAlbum.$add(album);
    afAlbum.$save();
  };

  Album.retrieveRecord = function(albumKey){
    fbAlbums = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/albums/' + albumKey + '/photos/');
    afAlbums = $firebaseArray(fbAlbums);
    afAlbums.$watch(function(event){
      console.log(event);
      $rootScope.albums = afAlbums;
    });
    afAlbums.$loaded().then(function(){
      $rootScope.albums = afAlbums;
    });
  };

  Album.setFavorite = function(albumKey){
    fbAlbumRec = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/albums/' + albumKey);
    afAlbumRec = $firebaseObject(fbAlbumRec);
    console.log(afAlbumRec);
    $rootScope.albumInfo = afAlbumRec;
  };

  Album.saveAlbum = function(){
    afAlbumRec.$save();
  }

  Album.addPhoto = function(photoString){
    afAlbums.$add(photoString);
  };

  Album.deletePhoto = function(photoIndex){
    afAlbums.$remove(photoIndex);
  };

  return Album;

});
