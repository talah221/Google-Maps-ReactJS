import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import { Button } from '@material-ui/core';

class _GoogleMap extends React.Component {
  style = {
    height: '60%',
    margin: '30px',
  };
  state = {
    markers: [],
    infoWindows: [],
  };

  onMapClicked = (mapProps, map, ev) => {
    console.log('map clicked!');
    const { latLng } = ev;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.setState({
      markers: [
        ...this.state.markers,
        { name: 'Enter Position Name', position: { lat, lng } },
      ],
      center: { lat, lng },
    });
  };

  cleanMap = () => {
    this.setState({ markers: [], infoWindows: [] });
  };

  markerClicked = (props, marker, event) => {
    console.log('Marker clicked!');
    console.log('props:', props, ' marker:', marker, 'event', event);
    const latLng = props.position;
    this.setState(
      {
        infoWindows: [
          ...this.state.infoWindows,
          { position: latLng, txt: 'Window TXT' },
        ],
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.cleanMap}
          disabled={!this.state.markers.length > 0}
          variant='contained'
          color='primary'
        >
          Clean Map
        </Button>
        {!this.state.markers.length>0 && <h3>Click on map to add Markers!</h3>}

        <Map
          style={this.style}
          initialCenter={{ lat: 32.0853, lng: 34.7818 }}
          // center={this.state.center}
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={14}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              onClick={this.markerClicked}
              key={index}
              position={marker.position}
            />
          ))}

          {this.state.infoWindows.map((window, idx) => {
            return (
              <InfoWindow key={idx} position={window.position}>
                <h3>{window.txt}</h3>
              </InfoWindow>
            );
          })}

          {/* {this.state.center && (
            <InfoWindow position={this.state.center} visible={true}>
              <input type='text' value='asd' />
            </InfoWindow>
          )} */}
        </Map>
      </React.Fragment>
    );
  }
}

export const MapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyA7wFxeGayDFtxLfft53sDr7sMu9cj7Vio',
})(_GoogleMap);
