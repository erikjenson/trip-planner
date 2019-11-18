const mapbox = require('mapbox-gl');

const iconURLs = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
  Hotel: 'http://i.imgur.com/D9574Cu.png',
  Restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

function buildMaker(type, coord) {
  const marker = document.createElement('div');
  marker.style.width = '32px';
  marker.style.height = '39px';

  if (type === 'Activity') {
    marker.style.backgroundImage = iconURLs[type];
  }
  if (type === 'Hotel') {
    marker.style.backgroundImage = iconURLs[type];
  }
  if (type === 'Restaurant') {
    marker.style.backgroundImage = iconURLs[type];
  }

  return new mapboxgl.Marker(marker).setLngLat(coord).addTo(map);
}
//[-74.009, 40.705]

module.exports = buildMaker;
