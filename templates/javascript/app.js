'use strict';

angular
  .module('<%= scriptAppName %>', ['OAuth2'<% if(angularModules) { %>, <%= angularModules %><% } %>])<% if (ngRoute) { %>
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })<% } %>;
