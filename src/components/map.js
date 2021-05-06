// import {Map, InfoWindow, Marker, GoogleApiWrapper,Polygon} from 'google-maps-react';
 
// import {Component} from 'react';

// export class MapContainer extends Component {
//   render() {

//     const triangleCoords = [
//         {lat:23.7104, lng: 90.40744}
//       ];

//     return (
//       <Map google={this.props.google}
//        zoom={14}
//        style={{width: '50%', height: '50%', position: 'relative'}}
//        >
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <Polygon
//           paths={triangleCoords}
//           strokeColor="#0000FF"
//           strokeOpacity={0.8}
//           strokeWeight={2}
//           fillColor="#0000FF"
//           fillOpacity={0.35} />
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//     apiKey: ("")
// })(MapContainer)



import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyA7TEXYBt1Z3I_-psmirU6Ims1RNdnFhTc'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

























