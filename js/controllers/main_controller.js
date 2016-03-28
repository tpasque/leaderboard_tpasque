
app.controller('MainController', ['$scope', '$interval', 'Board', function($scope, $interval, Board){
      // $scope.getStats()
      Board.results().then(function (results) {
        $scope.totalAthletes = results.data.results.length
        $scope.results = results.data.results
        console.log($scope.results);
      })

        // $scope.getStats = function() {
        //   Board.results().then(function (results) {
        //     $scope.totalAtheletes = results.data.results.length

            // var stats = results.data.results
            // var atheleteCount = results.data.results.length
            // $scope.results = []
            // var start = 0
            // var end = (start + 10)
            // do{
            //   function loop(start){
            //     for (var i = start; i < end; i++) {
            //       $scope.results.push(stats[i])
            //     }
            //     return $scope.results
            //   }
            //   start = 1 + end
            //   loop(start);
            //   console.log(start);
            // } while (end >= atheleteCount)



            // var stats = results.data.results
            // var atheleteCount = results.data.results.length
            // $scope.results = results.data.results
            // $scope.results = []
            //
            // var start = 0
            // var end = (start + 10)
            // function loop(start){
            //   console.log(start);
            //   for (var i = start; i < end; i++) {
            //     $scope.results.push(stats[i])
            //   }
            //   start = end + 1
            //   console.log("start 2");
            //   console.log(start);
            // }
            // console.log(start);
            // loop(start)

            // console.log($scope.results);

        //     var stats = results.data.results
        //     var atheleteCount = results.data.results.length
        //     $scope.results = results.data.results
        //     $scope.results = []
        //
        //     var start = 0
        //     var end = (start + 10)
        //     for (var i = start; i < end; i++) {
        //       $scope.results.push(stats[i])
        //       console.log($scope.results);
        //     }
        //
        //     console.log($scope.results);
        //   })
        //
        //     console.log("$scope.getStats - Interval occurred");
        //
        // }
        // $interval( function(){ $scope.getStats(); }, 5000);

    }]);
