import React, { Component } from 'react';
import { MapContainer } from '../cmps/MapContainer';

export class MainApp extends Component {


  render() {
    return (
      <div className='main-app-container'>
        <h1>Google Maps</h1>
        <div className='map-container'>
          <MapContainer />
        </div>
      </div>
    );
  }
}
