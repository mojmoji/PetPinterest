'use strict';

/**
 * @ngdoc overview
 * @name se165PetPinterestWebApp
 * @description
 * # se165PetPinterestWebApp
 *
 * Main module of the application.
 */
angular
  .module('se165PetPinterestWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
