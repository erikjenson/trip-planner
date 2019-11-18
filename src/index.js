console.log('Hello World');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWFqOSIsImEiOiJjazM0bzBoc3UwMHNhM2xteW9odTIwcmM1In0.edEo4d5VlgejuN584kbuaQ';

const marker = require('./marker');

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(marker('Hotel')).setLngLat([-74.009, 40.705]).addTo(map);
