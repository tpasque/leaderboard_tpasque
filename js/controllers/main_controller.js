
app.controller('MainController', ['$scope', '$interval', 'Board', function($scope, $interval, Board){
      Board.results().then(function (results) {
        $scope.results = results.data.results
        console.log($scope.results);
      })
      // Interval.callAtInterval().then(function (stuff) {
      //   console.log("you are here");
      // })
      // $interval(callAtInterval, 5000);
    }]);

//     function callAtInterval() {
//     console.log("Interval occurred");
// }
