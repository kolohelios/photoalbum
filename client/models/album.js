'use strict';

angular.module('photoalbum')
.factory('Album', function($rootScope, $firebaseArray){

  var fbAlbums;
  var afAlbums;

  var fbAlbum;
  var afAlbum;

  function Album(){

  }

  Album.init = function(){
   fbAlbums = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/albums/');
   afAlbums = $firebaseArray(fbAlbums);
   afAlbums.$loaded().then(function(){
     $rootScope.albums =  afAlbums;
   });
 };

  Album.new = function(album){
    afAlbums.$add(album);
    return afAlbums.$save();
  };

  Album.retrieveRecord = function(key){
    return afAlbums.$getRecord(key);
  };

  Album.addPhoto = function(photoString, key){
    fbAlbum = fbAlbums.child(key).child('photos/');
    afAlbum = $firebaseArray(fbAlbum);
    afAlbum.$add(photoString);
  };

  Album.deletePhoto = function(photoKey, albumKey){
    fbAlbum = fbAlbums.child(albumKey).child('photos/');
    afAlbum = $firebaseArray(fbAlbum);

    afAlbum.$loaded().then(function(){
      for(var i = 0; i < afAlbum.length; i++){
        var key = afAlbum.$keyAt(i);
        console.log(i);
        if(key === photoKey){
          afAlbum.$remove(i);
        }
      }
    });
  };

   return Album;

});
