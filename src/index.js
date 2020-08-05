console.log('Hello World');
const mapboxgl = require('mapbox-gl');
const { buildMarker, marker } = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWFqOSIsImEiOiJjazM0bzBoc3UwMHNhM2xteW9odTIwcmM1In0.edEo4d5VlgejuN584kbuaQ';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v11', // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement('div');
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

marker(map);

buildMarker('Activity', [-74.001, 40.57], map);

// const mark = new mapboxgl.Marker(marker('Hotel'));
// mark.setLngLat([-74.009, 40.705]).addTo(map);
