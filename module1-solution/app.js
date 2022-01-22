(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "";
    $scope.actualState = " ";

   $scope.displayOutput = function () {
   var state = calculatstate($scope.name);
   $scope.actualState = state;
 };

 function calculatstate(string) {
   if(string == ""){
     return  "Please enter data first";
   }
   var totalStringValue = 0;
   const words = string.split(',');
   for (var i = 0; i < words.length; i++) {

     totalStringValue ++;
   }
    if(totalStringValue <= 3 ){
     return "Enjoy!"
   }
   else
   return "Too much!";
 }
});

})();
