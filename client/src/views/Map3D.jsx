import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Map.css'

const Map = () => {


  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



  useEffect(() => {
    console.log("Map Page Loading")

    // var marker = new mapboxgl.Marker()
    //   .setLngLat([30.5, 50.5])
    //   .addTo(map);

    console.log(window.innerWidth)
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamVuc2VuIiwiYSI6ImNrYnBqMmxjajBtbzkzMG9mcWhqNWp3eW0ifQ.P7-NNo-uJymh-G--FyC9xA';
    var map = new mapboxgl.Map({
      container: 'mapContainer',
      // style: 'mapbox://styles/mapbox/satellite-v9',
      center: [
        -116.86013460159302,
        34.22468385344231
      ],
      pitch: 85,
      bearing: 180,
      style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
      // center: [-116.84, 34.23], // starting position [lng, lat]
      zoom: 16, // starting zoom,
      // maxBounds: [
      //   [
      //     -116.87092781066895,
      //     34.208537062464366
      //   ],
      //   [
      //     -116.84732437133789,
      //     34.230041774892676
      //   ]
      // ]
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([
        -116.86040550470352,
        34.21151158708819
      ])

      .addTo(map);
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }));

    // Load an image from an external URL.
    map.loadImage('http://placekitten.com/50/50', function (error, image) {
      if (error) throw error;
      // Add the loaded image to the style's sprite with the ID 'kitten'.
      map.addImage('kitten', image);
    });






    // Hover Effect https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/

    map.on('load', function () {

      //  Add 3D Terrain
      map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        // 'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
        }
      });

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

      // Create Exhibition
      map.addSource('Exhibition', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              // Build https://geojson.io/#map=17/34.21625/-116.86052
              [
                -116.86064958572388,
                34.212143743223685
              ],
              [
                -116.86075150966643,
                34.212378859734386
              ],
              [
                -116.86083197593688,
                34.212618411731
              ],
              [
                -116.8609070777893,
                34.2129466855833
              ],
              [
                -116.86095535755156,
                34.21334593584237
              ],
              [
                -116.86095535755156,
                34.21367864294658
              ],
              [
                -116.8608856201172,
                34.21412668643796
              ],
              [
                -116.86087489128111,
                34.21436623346589
              ],
              [
                -116.86083197593688,
                34.21462352395959
              ],
              [
                -116.86089634895325,
                34.215040510332656
              ],
              [
                -116.86089634895325,
                34.21543087868409
              ],
              [
                -116.86099290847777,
                34.21611401894729
              ],
              [
                -116.86110019683838,
                34.21668181962636
              ],
              [
                -116.8611752986908,
                34.21694797487751
              ],
              [
                -116.86132550239562,
                34.217116539435004
              ],
              [
                -116.861572265625,
                34.21729397544703
              ],
              [
                -116.86165809631348,
                34.21751576993655
              ],
              [
                -116.86177611351013,
                34.21782628124097
              ],
              [
                -116.86178684234619,
                34.21811017628928
              ],
              [
                -116.86174392700195,
                34.21832309694773
              ]
            ]
          }
        }
      });

      // Create Exhibition Poly
      map.addSource('Exhibition Poly', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Polygon',
            'coordinates': [[
              [
                -116.86053693294525,
                34.212294572758815
              ],
              [
                -116.86062812805174,
                34.21278254881699
              ],
              [
                -116.86066567897797,
                34.213128566491456
              ],
              [
                -116.86069786548615,
                34.21349676322574
              ],
              [
                -116.86070859432219,
                34.21391375517476
              ],
              [
                -116.86068713665009,
                34.21441059395189
              ],
              [
                -116.86067104339598,
                34.21465901224186
              ],
              [
                -116.86071932315825,
                34.214845325478734
              ],
              [
                -116.86072468757631,
                34.215084870463684
              ],
              [
                -116.86074078083038,
                34.21558170233552
              ],
              [
                -116.86078369617462,
                34.21594545238409
              ],
              [
                -116.86085879802704,
                34.21619386614898
              ],
              [
                -116.86088025569914,
                34.21636686815977
              ],
              [
                -116.86089098453522,
                34.21672617889329
              ],
              [
                -116.86092317104341,
                34.21691692347484
              ],
              [
                -116.86100900173187,
                34.21705000083417
              ],
              [
                -116.8611752986908,
                34.2171830779833
              ],
              [
                -116.86129868030548,
                34.217200821587305
              ],
              [
                -116.86144888401033,
                34.217360513855176
              ],
              [
                -116.86158835887909,
                34.217511334052475
              ],
              [
                -116.86165273189545,
                34.21774199971435
              ],
              [
                -116.86165273189545,
                34.21792830613407
              ],
              [
                -116.86156690120696,
                34.218185585750675
              ],
              [
                -116.86163663864134,
                34.21834527615202
              ],
              [
                -116.8619155883789,
                34.21799040818244
              ],
              [
                -116.86189949512482,
                34.21764441047293
              ],
              [
                -116.86183512210846,
                34.21738712920373
              ],
              [
                -116.86166882514954,
                34.21716977027786
              ],
              [
                -116.86151862144469,
                34.21699233400427
              ],
              [
                -116.86137914657593,
                34.216819333277755
              ],
              [
                -116.86123430728911,
                34.21629589301883
              ],
              [
                -116.86114847660065,
                34.2159587602829
              ],
              [
                -116.8610465526581,
                34.2154619306344
              ],
              [
                -116.86102509498596,
                34.21511592254149
              ],
              [
                -116.86100363731386,
                34.214845325478734
              ],
              [
                -116.8610143661499,
                34.21454811131005
              ],
              [
                -116.86115920543669,
                34.214259768204215
              ],
              [
                -116.86127722263335,
                34.213896010878535
              ],
              [
                -116.8612664937973,
                34.21363428207528
              ],
              [
                -116.86120212078093,
                34.21303984414627
              ],
              [
                -116.86096072196959,
                34.212192541044004
              ],
              [
                -116.86053693294525,
                34.212294572758815
              ]
            ]]
          }
        }
      });

      // Create The Wedge
      map.addSource('The Wedge', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [[
              -116.86042428016663,
              34.21217036022007
            ],
            [
              -116.8602204322815,
              34.212454274325275
            ],
            [
              -116.86017751693726,
              34.21277367655025
            ],
            [
              -116.86009168624878,
              34.2132793942639
            ],
            [
              -116.85999512672423,
              34.21359435727109
            ],
            [
              -116.85993075370789,
              34.2139625519701
            ],
            [
              -116.85995757579805,
              34.21410007005949
            ],
            [
              -116.86008095741272,
              34.21442390209313
            ],
            [
              -116.86016142368317,
              34.21452149506468
            ]
            ]
          }
        }
      });

      // Add Exhibition
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
      // Add Exhibition Poly
      map.addLayer({
        'id': 'Exhibition Poly',
        'type': 'fill',
        'source': 'Exhibition Poly',
        'paint': {
          'fill-color': '#FFFFFF',
          'fill-opacity': 0.38,
          'fill-outline-color': "#EC0808"
          // Line thickness: Draw another line using same coordinates & change there.
        }
      });
      // Add The Wedge
      map.addLayer({
        'id': 'The Wedge',
        'type': 'line',
        'source': 'The Wedge',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#ff0000',
          'line-width': 2
        }
      });
    });

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