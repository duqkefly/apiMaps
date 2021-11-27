let map;
let coord = new Object();
let markers = [];

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
})

myModal.show()

// function initMap() {
//   //Obtener ubicacion actual del navegador
//   if (navigator.geolocation) {


//     navigator.geolocation.getCurrentPosition(showPosition);

//     function showPosition(position) {
//       coord.lat = position.coords.latitude;
//       coord.lng = position.coords.longitude;
//       /* coord.lat = 0;
//       coord.lng = 0; */
//       console.log(coord)

//       map = new google.maps.Map(document.getElementById("map"), {
//         center: coord,
//         zoom: 15,
//       });

//       marker = new google.maps.Marker({
//         position: coord,
//         map: map,
//         title: 'Mi lugar'
//       })

//       /* setInterval(() => {
//         coord.lat = coord.lat + 0.001;
//         coord.lng = coord.lng + 0.001;
//         marker.setPosition(coord);
//         console.log(coord)
//       }, 2000) */

//       /*  map.addListener("center_changed", () => {
//          console.log('dblclick')
//        }) */

//       map.addListener("click", (e) => {
//         marker.setMap(null);
//         addMarker(e.latLng, map);
//         coord.lat = e.latLng.lat()
//         coord.lng = e.latLng.lng()

//         //console.log(coord)
//       });

//       function addMarker(latLng, map) {
//         deleteMarkers();
//         const marker = new google.maps.Marker({
//           position: latLng,
//           map: map,
//         });
//         //Focus centered
//         map.panTo(latLng);
//         markers.push(marker);
//         console.log(markers);
//       }

//     }
//   } else {
//     alert('No admite geolocalización');
//   }
// }

// function deleteMarkers() {
//   hideMarkers();
//   markers = [];
// }

// function hideMarkers() {
//   setMapOnAll(null);
// }

// function setMapOnAll(map) {
//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }





