'use strict';

angular.module('photoalbum')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})

  .state('albums', {url: '/albums', templateUrl: '/views/albums/albums.html', abstract: true})
  .state('albums.new', {url: '/new', templateUrl: '/views/albums/albums-new.html', controller: 'AlbumsNewCtrl'})
  .state('albums.list', {url: '', templateUrl: '/views/albums/albums-list.html', controller: 'AlbumsListCtrl'})
  .state('albums.show', {url: '/{name}', templateUrl: '/views/albums/albums-show.html', controller: 'AlbumsShowCtrl'});
});
