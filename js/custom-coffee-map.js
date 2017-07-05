var colorTheme = [
{
"featureType": "poi",
"elementType": "all",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": -100
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": -100
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "administrative",
"elementType": "all",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": 0
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
  {
      "hue": "#ffffff"
  },
  {
      "saturation": -100
  },
  {
      "lightness": 100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "water",
"elementType": "labels",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": -100
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "road.local",
"elementType": "all",
"stylers": [
  {
      "hue": "#ffffff"
  },
  {
      "saturation": -100
  },
  {
      "lightness": 100
  },
  {
      "visibility": "on"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
      "hue": "#ffffff"
  },
  {
      "saturation": -100
  },
  {
      "lightness": 100
  },
  {
      "visibility": "on"
  }
]
},
{
"featureType": "transit",
"elementType": "labels",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": 0
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "landscape",
"elementType": "labels",
"stylers": [
  {
      "hue": "#000000"
  },
  {
      "saturation": -100
  },
  {
      "lightness": -100
  },
  {
      "visibility": "off"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
      "hue": "#bbbbbb"
  },
  {
      "saturation": -100
  },
  {
      "lightness": 26
  },
  {
      "visibility": "on"
  }
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
  {
      "hue": "#dddddd"
  },
  {
      "saturation": -100
  },
  {
      "lightness": -3
  },
  {
      "visibility": "on"
  }
]
}
];

// Coffee icon
var coffeeImage = '/images/coffe_marker2.png';

// Office icon
var officeImage = '/images/office_marker.png';

// Multiple Markers
var markers = [
["Kontoret mitt", 59.9144185, 10.7396414, "https://www.google.no/maps/place/Rosenkrantz'+gate+10,+0159+Oslo/@59.9144442,10.7375236,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e7d14f254e9:0xae4ee237206e6a58!8m2!3d59.9144442!4d10.7397123?hl=no", officeImage],
["Lunsj på Cin Cin Café", 59.9146286, 10.7415599, "https://www.google.no/maps/place/Cin+Cin+Caf%C3%A9/@59.9146286,10.7415599,19.36z/data=!4m13!1m7!3m6!1s0x46416e7d14f254e9:0xae4ee237206e6a58!2sRosenkrantz'+gate+10,+0159+Oslo!3b1!8m2!3d59.9144442!4d10.7397123!3m4!1s0x0:0xd845841da547d1f8!8m2!3d59.914705!4d10.7420399?hl=no", coffeeImage],
["Kaffe på Kaffebrenneriet", 59.9157461, 10.7377053, "https://www.google.no/maps/place/Kaffebrenneriet+avd+Universitetsgata/@59.9157461,10.7377053,18.38z/data=!4m13!1m7!3m6!1s0x46416e7d14f254e9:0xae4ee237206e6a58!2sRosenkrantz'+gate+10,+0159+Oslo!3b1!8m2!3d59.9144442!4d10.7397123!3m4!1s0x0:0x7b38b818cad796c2!8m2!3d59.9157299!4d10.7376578?hl=no", coffeeImage],
["Middag på HåndtverkerStuene", 59.9149927, 10.7391957, "https://www.google.no/maps/place/H%C3%A5ndverkerStuene/@59.9149927,10.7391957,19.61z/data=!4m13!1m7!3m6!1s0x46416e7d14f254e9:0xae4ee237206e6a58!2sRosenkrantz'+gate+10,+0159+Oslo!3b1!8m2!3d59.9144442!4d10.7397123!3m4!1s0x0:0x81a2624346e8c852!8m2!3d59.914961!4d10.7396541?hl=no", coffeeImage],
["Kaffe på Stockfleths", 59.9137975, 10.7403254, "https://www.google.no/maps/place/Stockfleths/@59.9137975,10.7403254,19.03z/data=!4m13!1m7!3m6!1s0x46416e7d14f254e9:0xae4ee237206e6a58!2sRosenkrantz'+gate+10,+0159+Oslo!3b1!8m2!3d59.9144442!4d10.7397123!3m4!1s0x0:0x5cade9e2dcdcd185!8m2!3d59.9136653!4d10.7412728?hl=no", coffeeImage],
["Lunsj på Taqueria", 59.9142728, 10.7374968, "https://www.google.no/maps/place/Taqueria/@59.914359,10.7377632,21z/data=!4m5!3m4!1s0x0:0xc72ae2ba401daca6!8m2!3d59.914388!4d10.7376887?hl=no", coffeeImage]
];

window.initMap = function() {
 var map;
 var bounds = new google.maps.LatLngBounds();
 var mapOptions = {
     mapTypeId: 'roadmap',
     scrollwheel: false,
     draggable: false,
     mapTypeControl: false,
     scaleControl: false,
     streetViewControl: false,
     zoomControl: true,
     styles: colorTheme
 };

 // Display a map on the page
 map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 map.setTilt(45);

 var shape = {
     coords: [1, 1, 1, 60, 60, 60, 60, 1],
     type: 'poly'
   };


 // Loop through our array of markers & place each one on the map
 for( i = 0; i < markers.length; i++ ) {
     var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
     bounds.extend(position);
     marker = new google.maps.Marker({
         position: position,
         map: map,
         icon: {
           url: markers[i][4],
           labelOrigin: new google.maps.Point(30, 60)
         },
         label: markers[i][0]
     });

     // Allow each marker to have an info window
     google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             window.location.href = markers[i][3];
         }
     })(marker, i));

     // Automatically center the map fitting all markers on the screen
     map.fitBounds(bounds);
 }

 // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
 var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
     this.setZoom(17);
     google.maps.event.removeListener(boundsListener);
 });
}
