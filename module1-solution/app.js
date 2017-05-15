(function() {
  'use strict';

  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    //$scope.msg = "##Nothing here!";
    $scope.doCheck = function() {
      var list_str = $scope.lunch_list;
      if (list_str)
        var list = list_str.split(',');
      else {
        $scope.msg = "Please enter data first";
        return;
      }
      var n = 0;
      for (var i in list)
        n++;
      if (n <= 3)
        $scope.msg = "Enjoy!";
      else
        $scope.msg = "Too much!";
    };

  };
})

();
