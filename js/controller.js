var dc = angular.module('DeviceController', ['ngMaterial','ngAnimate']);



dc.controller('DeviceListController', ['$scope','$http',function ($scope,$http) {
$http.get('https://nimbleapi.firebaseio.com/data.json').success(function(data){
$scope.items = data;

});

}]);



dc.controller('DeviceDetailConroller', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
$http.get('https://nimbleapi.firebaseio.com/data.json').success(function(data){
$scope.items = data;
$scope.myItemD = $routeParams.itemId;


        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.items.length-1;
        }

        if ($routeParams.itemId < $scope.items.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }


});

}]);