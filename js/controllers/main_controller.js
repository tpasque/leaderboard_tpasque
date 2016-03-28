
app.controller('MainController', ['$scope', '$interval', 'Board', '$timeout', function($scope, $interval, Board, $timeout){
      // $scope.getStats()

      $timeout(function () {

        Board.results().then(function (results) {
          $scope.totalAthletes = results.data.results.length
          $scope.results = results.data.results
          console.log($scope.results);
        })

        $scope.inc_value = 0 ;

        $scope.getStats = function() {
          Board.results().then(function (results) {
            $scope.totalAtheletes = results.data.results.length

            var stats = results.data.results
            var atheleteCount = results.data.results.length
            $scope.results = results.data.results
            $scope.results = []

            var start = $scope.inc_value;
            var end = (start + 10)
            for (var i = start; i < end; i++) {
              $scope.results.push(stats[i])
              console.log($scope.results);
            }

            console.log($scope.results);
            $scope.inc_value += 10;
            // if ($scope.inc_value )
            console.log("my inc value is"+$scope.inc_value);
          })

          console.log("$scope.getStats - Interval occurred");

        }

        $interval( function(){ $scope.getStats(); }, 5000);

      })

    }]);
