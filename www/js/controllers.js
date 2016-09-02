angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('KecepatanCtrl',function($scope, AmbilKecepatan){
  console.log('kecepatan')

  setInterval(function(){
      AmbilKecepatan.index().success(function(data){
      $scope.users=data;
      console.log('ok');
      console.log(data)
    }).error(function(error){
      console.log(error)
    })
    },1000)
})

.controller('AlkoholCtrl',function($scope, AmbilAlkohol){
  console.log('alkohol');
  setInterval(function(){
      AmbilAlkohol.index().success(function(data){
      $scope.users=data;
      console.log('ok');
      console.log(data)
    }).error(function(error){
      console.log(error)
    })
  },1000)
})

.controller('PosisiCtrl',function($scope,$ionicLoading){
  console.log('posisi')
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);

      var lat = pos.coords.latitude;
      var longi = pos.coords.longitude;
      console.log(lat, longi)
      var mapOptions = {
          center: new google.maps.LatLng(lat, longi),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      $scope.map.setCenter(new google.maps.LatLng(lat, longi));
      
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      
      var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(lat, longi),
                map: map,
                title: "My Location"
            });

      $scope.loading.hide();

    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

.service('AmbilAlkohol',['$http',function($http){
  this.index=function(){
    // return $http.get('http://api.geeknesia.com/api/attribute/alkohol?api_key=5bded85a649741f55578c6dc39731be8');
    return $http.get('http://api.geeknesia.com/api/attribute/alkohol?api_key=59dc4d4f92f9f03fafe5d60493aeb369');
  }
}])

.service('AmbilKecepatan',['$http',function($http){
  this.index=function(){
    // return $http.get('http://api.geeknesia.com/api/attribute/alkohol?api_key=5bded85a649741f55578c6dc39731be8');
    return $http.get('http://api.geeknesia.com/api/attribute/alkohol?api_key=5bded85a649741f55578c6dc39731be8');
  }
}])