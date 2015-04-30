'use strict';

angular.module('photoalbum')
.factory('Album', function($rootScope, $firebaseArray, $firebaseObject){

  var fbAlbum;
  var afAlbum;

  var fbAlbums;
  var afAlbums;

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
    //
  };

  Album.setFavorite = function(favorite, albumKey){
    var fbFav = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/albums/' + albumKey);
    var afFav = $firebaseArray(fbFav);
    console.log(afFav);
    var newObj = angular.copy(afFav);
    newObj.favorite = favorite;
    console.log(newObj);

  };

  Album.addPhoto = function(photoString){
    afAlbums.$add(photoString);
  };

  Album.deletePhoto = function(photoIndex){
    // afAlbums.$loaded().then(function(){
    //   console.log(afAlbums);
    //   afAlbums.$remove(photoIndex);
    // });
    afAlbums.$remove(photoIndex);
    //console.log(afAlbums.$remove(photoIndex));
  };

  return Album;

});
