import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/CurrentMap.css'
import {
  exhibition,
  the_wedge
} from '../data/Runs'

import { runs, runData, liftData, liftHouseData } from '../data/Runs'

// import {char_1} from '../data/Lifts'

const CurrentMap = () => {

  const [currentDispatches, setCurrentDispatches] = useState();
  const [dispatchesLoaded, setDispatchesLoaded] = useState();

  useEffect(() => {
    getCurrentDispatches();
  }, [])

  const sorted = (dispatchesList) => {
    return dispatchesList.sort((a, b) => a.Number.localeCompare(b.Number))
  }

  const getCurrentDispatches = () => {
    axios.get(`http://localhost:8000/api/allDispatches`)
      .then(res => {
        setCurrentDispatches(sorted(res.data))
        setDispatchesLoaded(true)
        console.log("Current Dispatches", res.data)
      })
      .catch(err => {
        console.log("We have an error", err)
        // console.log("This is the error", err.message)
        if (err.message === "Network Error") {
          console.log("The database is probably not connected")
        }
      })
  }

  var show_map = true
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



  useEffect(() => {
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

      axios.get(`http://localhost:8000/mapboxKey`)
        .then(res => {
          mapboxgl.accessToken = res.data
          console.log("Mapbox Key Set")

          // Create Map
          var map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [
              -116.85976982116699,
              34.21923687533004
            ],
            // center: [-116.84, 34.5], // starting position [lng, lat]
            bearing: 180,
            //zoom: 14, // starting zoom,
            // Calculate zoom to fit screen size
            maxBounds: [
              [
                -116.8738031387329,
                34.208998442290344
              ], [
                -116.84646606445312,
                34.23170940273817
              ]
            ]
          });

          new mapboxgl.Marker()
            .setLngLat([
              -116.86040550470352,
              34.21151158708819
            ]).addTo(map);

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

            map.addSource('runData', runData)
            map.addLayer({
              "id": "Run Data",
              "type": "line",
              "source": "runData",
              'layout': {
                'line-join': 'round',
                'line-cap': 'round'
              },
              'paint': {
                'line-color': '#00FF00',
                'line-width': 2
              }
            });

            map.addSource('liftData', liftData)

            map.addLayer({
              "id": "Lift Data",
              "type": "line",
              "source": "liftData",
              'layout': {
                'line-join': 'round',
                'line-cap': 'round'
              },
              'paint': {
                'line-color': '#FF1493',
                'line-width': 2
              }
            });

            map.addSource('liftHouseData', liftHouseData)

            map.addLayer({
              "id": "Lift House Data",
              "type": "circle",
              "source": "liftHouseData",
              "paint": {
                'circle-color': '#00FF00',
              }
            });

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
                'line-color': '#FF00E6',
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
        })
        .catch(err => {
          console.log("We have an error", err)
          if (err.message === "Network Error") {
            console.log("The access token is probably missing")
          }
        })

    }
  })

  return (
    <div>
      <div className="left-menu">
        <div className="dispatch">
          <h4>
            Active Dispatches
          </h4>
          <ul>

            {dispatchesLoaded && currentDispatches.map((dispatch) =>
              <li key={dispatch._id}>
                {dispatch.Number}, {dispatch.Location}
              </li>
            )}
          </ul>
        </div>
        <div className="incidents">Active Incidents</div>
        <div className="investigations">Active Investigations</div>
      </div>
      <div id="mapContainer"></div>
      <div className="right-menu">
        <h3>Layers</h3>
        <ul className="layers-list">
          <li> <div className="checkbox"></div> Incidents</li>
          <li> <div className="checkbox"></div> Lifts</li>
          <li> <div className="checkbox"></div> Runs</li>
          <li> <div className="checkbox"></div> Features</li>
          <li> <div className="checkbox"></div> Signs</li>
          <li> <div className="checkbox"></div> Safety</li>
          <li> <div className="checkbox"></div> Toboggans</li>
          <li> <div className="checkbox"></div> Trauma Packs</li>
          <li> <div className="checkbox"></div> O2 Bottles</li>
          <li> <div className="checkbox"></div> OTS Kits</li>
          <li> <div className="checkbox"></div> Hydrants</li>
          <li> <div className="checkbox"></div> SMI</li>
          <li> <div className="checkbox"></div> Investigations</li>
        </ul>
      </div>
    </div>
  )
}

export default CurrentMap;