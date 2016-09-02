angular.module('starter.directives', [])

.directive('map', function($ionicLoading) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      // var directionsService = new google.maps.DirectionsService;
      //   var directionsDisplay = new google.maps.DirectionsRenderer;
        
      // var onChangeHandler = function() {
      //     calculateAndDisplayRoute(directionsService, directionsDisplay);
      //     console.log('function nih')
      //   };
      //   document.getElementById('direksi').addEventListener('click',onChangeHandler);
      //   // document.getElementById('start').addEventListener('change', onChangeHandler);
      //   // document.getElementById('end').addEventListener('change', onChangeHandler);
      // //}

      // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      //   directionsService.route({
      //     origin: 'way halim',//document.getElementById('start').value,
      //     destination: 'kemiling',//document.getElementById('end').value,
      //     provideRouteAlternatives: true,
      //     travelMode: 'DRIVING'
          
      //   }, function(response, status) {
      //     if (status === 'OK') {
      //       directionsDisplay.setDirections(response);
      //     } else {
      //       window.alert('Directions request failed due to ' + status);
      //     }
      //   });
      //   console.log('calculateAndDisplayRoute')
      // }
      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      function initialize() {
        navigator.geolocation.getCurrentPosition(function (pos) {
          console.log('Got pos directive', pos);

          var lat = pos.coords.latitude;
          var longi = pos.coords.longitude;
          console.log(lat, longi)
          var mapOptions = {
            center: new google.maps.LatLng(lat, longi),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          // $scope.map.setCenter(new google.maps.LatLng(lat, longi));
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
          //$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(lat, longi),
                map: map,
                title: "My Location"
          });

          $ionicLoading.hide();

    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });







        // var mapOptions = {
        //   center: new google.maps.LatLng(43.07493, -89.381388),
        //   zoom: 16,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // var map = new google.maps.Map($element[0], mapOptions);
        // var myLocation = new google.maps.Marker({
        //         position: new google.maps.LatLng(43.07493, -89.381388),
        //         map: map,
        //         title: "My Location"
        //     });
        // $scope.onCreate({map: map});

        // // Stop the side bar from dragging when mousedown/tapdown on the map
        // google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
        //   e.preventDefault();
        //   return false;
        // });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
// angular.module('starter.directives', [])

// .directive('map', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       onCreate: '&'
//     },
//     link: function ($scope, $element, $attr) {
//       function initialize() {
//         var mapOptions = {
//           center: new google.maps.LatLng(43.07493, -89.381388),
//           zoom: 16,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map($element[0], mapOptions);
//         var myLocation = new google.maps.Marker({
//                 position: new google.maps.LatLng(43.07493, -89.381388),
//                 map: map,
//                 title: "My Location"
//             });
//         $scope.onCreate({map: map});

//         // Stop the side bar from dragging when mousedown/tapdown on the map
//         google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
//           e.preventDefault();
//           return false;
//         });
//       }

//       if (document.readyState === "complete") {
//         initialize();
//       } else {
//         google.maps.event.addDomListener(window, 'load', initialize);
//       }
//     }
//   }
// });
