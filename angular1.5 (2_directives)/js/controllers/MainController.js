app.controller('MainController', ['$scope', function($scope) {
  
  //Next 4 are a singular property binded to the overall $scope
  // (move,shutterbugg, gameboard, forecast)

  $scope.move = {
    icon: 'img/acuu4l8w6qwy.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/trippy from mom.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/acuu4l8w6qwy.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/trippy from mom.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  

  //$scope.apps is a singular array binded to the scope.
  //It includes multiple identical elements.

  $scope.apps =
    [ 
  { 
    icon: 'img/vitruv.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/acuu4l8w6qwy.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  },
     { 
    icon: 'img/opticalillusion.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/opticalillusion.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  } 
];
  
}]);