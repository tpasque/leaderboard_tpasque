
app.controller('MainController', ['$scope', 'Board', function($scope, Board){
      Board.results().then(function (results) {
        $scope.results = results.data.results
        console.log($scope.results);
      })
    }]);
