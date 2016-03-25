
app.service('Board', ['$http', function($http){
  this.results = function () {
    return $http.get('https://apis.trainheroic.com/public/leaderboard/468425');
  }

}])
