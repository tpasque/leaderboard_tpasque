
app.controller('MainController', ['$scope', '$interval', 'Board', '$timeout', function($scope, $interval, Board, $timeout){
      $timeout(function () {

        $scope.inc_value = 0 ;

        $scope.getStats = function() {
          Board.results().then(function (results) {
            $scope.totalAthletes = results.data.results.length
            $scope.results = results.data.results
            var athleteCount = results.data.results.length

            //find the upper limit for the loop of the current results
            var remainder = athleteCount % 10

            //var lowerHigh gives the loop an upper constraint
            var lowerHigh = athleteCount - remainder
            var bumpValue;
            var start = $scope.inc_value;

            if ($scope.inc_value == 0){
              start = 0;
              bumpValue = 6;
            } else if ($scope.inc_value > 0 && $scope.inc_value < lowerHigh) {
              start = $scope.inc_value
              bumpValue = 6;
            } else{
              start = athleteCount - remainder
              bumpValue = remainder
            }
            $scope.totalAthletes = results.data.results.length
            var stats = results.data.results
            $scope.results = results.data.results
            $scope.results = []
            $scope.inc_value += bumpValue;

            // start = $scope.inc_value;
            var end = (start + bumpValue)
            for (var i = start; i < end; i++) {
              $scope.results.push(stats[i])
            }
            if ($scope.inc_value >= athleteCount){
               $scope.inc_value  = 0 ;
            }
          })
        }

        $interval( function(){ $scope.getStats(); }, 7000);

      })

    }]);
