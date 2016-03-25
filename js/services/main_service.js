
app.service('Board', ['$http', function($http){
  this.results = function () {
    return $http.get('https://apis.trainheroic.com/public/leaderboard/468425');
  }

}])

// app.service('Interval', ['$interval', function ($interval) {
//   this.callAtInterval = function () {
//     console.log("this is the interval");
//   }
// }])
