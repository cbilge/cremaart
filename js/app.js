var app = angular.module('cremaApp', [
	'ngRoute',
	'cremaControllers',
	'cremaServices'
	]);

app.config(['$routeProvider', function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
}]);