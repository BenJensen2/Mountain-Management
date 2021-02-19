import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Map.css'
import {
  exhibition, exhibition_poly,
  the_wedge
} from '../data/Runs'

import { runs } from '../data/Runs'

// import {char_1} from '../data/Lifts'

const Map = (props) => {

  var show_map = true
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



  useEffect(() => {
    console.log("Exhibition", exhibition)
    console.log("All Runs", runs)
    console.log("The Wedge", runs.data.features[0])
    console.log("Map Page Loading")

    // Enable default context menu (Right click)
    window.oncontextmenu = (e) => {
      // e.preventDefault();
    }

    // var marker = new mapboxgl.Marker()
    //   .setLngLat([30.5, 50.5])
    //   .addTo(map);

    console.log(window.innerWidth)
    if (show_map === true) {


      mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamVuc2VuIiwiYSI6ImNrYnBqMmxjajBtbzkzMG9mcWhqNWp3eW0ifQ.P7-NNo-uJymh-G--FyC9xA';
      var map = new mapboxgl.Map({
        container: 'mapContainer',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [
          -116.85972690582275,
          34.22163216967793
        ],
        // center: [-116.84, 34.23], // starting position [lng, lat]
        bearing: 180,
        zoom: 14.2, // starting zoom,
        // Calculate zoom to fit screen size
        maxBounds: [
          [
            -116.89169883728026,
            34.1991669564866
          ], [
            -116.82140350341798,
            34.2435237775004
          ]
        ]
      });

      var marker = new mapboxgl.Marker()
        .setLngLat([
          -116.86040550470352,
          34.21151158708819
        ])

        .addTo(map);

      // Load an image from an external URL.
      map.loadImage('http://placekitten.com/50/50', function (error, image) {
        if (error) throw error;
        // Add the loaded image to the style's sprite with the ID 'kitten'.
        map.addImage('kitten', image);
      });






      // Hover Effect https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/

      map.on('load', function () {

        // Add an image to use as a custom marker
        map.loadImage(
          // 'file:///Users/ben/LocalDocuments/Coding/Code/Projects/BBSP/client/src/images/NSP_Cross.png',
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            // Add a GeoJSON source with 2 points
            map.addSource('points', {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [
                  {
                    // feature for Mapbox DC
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [
                        -116.86042428016663,
                        34.21217036022007
                      ]

                    },
                    'properties': {
                      'title': 'Mapbox DC'
                    }
                  },
                  {
                    // feature for Mapbox SF
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [
                        -116.8602204322815,
                        34.212454274325275
                      ]
                    },
                    'properties': {
                      'title': 'Mapbox SF'
                    }
                  }
                ]
              }
            });

            // Add a symbol layer
            map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'points',
              'layout': {
                'icon-image': 'custom-marker',
                // get the title name from the source's "title" property
                'text-field': ['get', 'title'],
                'text-font': [
                  'Open Sans Semibold',
                  'Arial Unicode MS Bold'
                ],
                'text-offset': [0, 1.25],
                'text-anchor': 'top'
              }
            });
          }
        );

        map.addSource('Exhibition', exhibition);

        map.addSource('The Wedge', the_wedge);

        map.addSource('runs', runs);


        map.addLayer({
          "id": "Exhibition Polygon",
          "type": "fill",
          "source": "runs",
          'paint': {
            'fill-color': '#FFFFFF',
            'fill-opacity': 0.38,
            'fill-outline-color': "#EC0808"
            // Line thickness: Draw another line using same coordinates & change there.
          },
          "filter": ["==", "name", 'Exhibition Polygon']
        });

        map.addLayer({
          "id": "The Wedge",
          "type": "line",
          "source": "runs",
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#00FF00',
            'line-width': 2
          },
          "filter": ["==", "name", 'The Wedge']
        });

        map.addLayer({
          'id': 'Exhibition',
          'type': 'line',
          'source': 'Exhibition',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#00FF00',
            'line-width': 2
          }
        });

        // map.addLayer({
        //   'id': 'The Wedge',
        //   'type': 'line',
        //   'source': 'The Wedge',
        //   'layout': {
        //     'line-join': 'round',
        //     'line-cap': 'round'
        //   },
        //   'paint': {
        //     'line-color': '#ff0000',
        //     'line-width': 2
        //   }
        // });
      });
    }
  })

  return (
    <div>
      <h1>
        Map
      </h1>
      <Link
        to="/"
      >Home
      </Link>
      <div id="mapContainer"></div>
    </div>
  )
}

export default Map;