var myApp =angular.module('myApp', ['ngRoute','DeviceController']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

$routeProvider.
when('/list',{

templateUrl: 'views/devicelist.html',
controller: 'DeviceListController'

}).

when('/details/:itemId',{

templateUrl: 'views/devicedetails.html',
controller: 'DeviceDetailConroller'


}).
otherwise({

redirectTo: '/list'

});	









}]);