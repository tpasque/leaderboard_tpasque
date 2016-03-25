
app.controller('MainController', ['$scope', '$interval', 'Board', function($scope, $interval, Board){


        $scope.callAtInterval = function() {
          Board.results().then(function (results) {
            $scope.results = results.data.results
            // console.log($scope.results);
            $scope.totalAtheletes = results.data.results.length
            // console.log($scope.totalAtheletes);
          })
            console.log("$scope.callAtInterval - Interval occurred");
        }

        $interval( function(){ $scope.callAtInterval(); }, 5000);

    }]);
