import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/world.topo.json";


const MapScreen = () => {
  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapScreen;


/*
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  { id: "1", title: "Marker 1", description: "Description 1", coordinate: { latitude: 37.78825, longitude: -122.4324 } },
  { id: "2", title: "Marker 2", description: "Description 2", coordinate: { latitude: 37.78820, longitude: -122.4323 } },
];

const MapScreen = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};

export default MapScreen;
*/