const mapboxgl = require('mapbox-gl');

const iconURLs = {
  Activity: 'http://i.imgur.com/WbMOfMl.png',
  Hotel: 'http://i.imgur.com/D9574Cu.png',
  Restaurant: 'http://i.imgur.com/cqR6pUI.png',
};
function buildMarker(type, coord, map) {
  return map.on('load', function () {
    map.loadImage(iconURLs[type], function (error, image) {
      if (error) throw error;
      map.addImage(type, image);
      map.addSource('point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: coord,
              },
            },
          ],
        },
      });
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'point',
        layout: {
          'icon-image': type,
          'icon-size': 1,
        },
      });
    });
  });
}

const marker = (map) =>
  new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map);

module.exports = { buildMarker, marker };
