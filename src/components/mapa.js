import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Mapa extends Component {
    static defaultProps = {
        center: {
            latitude: -22.962344, longitude: -43.404542, local: 'Jacarepaguá, Rio de Janeiro - RJ, 22780-086'
        },
        zoom: 11
      };
  
    render() {
      return (
        <div > 
            <div className="linha-mapa"></div>
        <div className="mapa">
        <Map 
            google={this.props.google}
            style={{ height: '400px', width: '100%' }}
            zoom={15}
            initialCenter={{ lat: -22.962344, lng: -43.404542 }}>

                <Marker 
                lat={this.props.latitude}
                lng={this.props.longitude}/>
            </Map>
        </div>
            

        </div>
        
      );
    }
  }
  
  export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyAkVveiuvUGuUyU9-LNIidEU0JOs619QhY',
    }
    ))(Mapa)