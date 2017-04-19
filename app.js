(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope, $filter) {
  $scope.messageText = "";
  
  $scope.checkItems = function () {
    var inputStr = $scope.inputVal;
      console.log($scope.inputVal);
    if (inputStr === '' || inputStr == null) {
      $scope.messageText = "Please enter data first";
      $scope.class= "alert alert-danger";
    } else {
      var inputArr = inputStr.split(',');
      var count = 0;
      for (var i = 0; i < inputArr.length; i++){
        if ( inputArr[i] != ''){
          console.log('input is :' + inputArr[i]);
          count  += 1;
        }
      }
      if (count == 0){
        $scope.messageText = "Please enter data first";
        $scope.class= "alert alert-danger";
      } else if (count <= 3) {
        $scope.messageText = "Enjoy!";
        $scope.class= "alert alert-success";
      } else {
        $scope.messageText = "Too Much!!!";
        $scope.class= "alert alert-warning";
      }
      
      console.log(inputArr.length);  
    }
    
  };
}
})();

