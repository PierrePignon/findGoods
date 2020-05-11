import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyC9NmSEZ5yFzs54PBpzbsIZyLjMWt7P_us");
Geocode.enableDebug();
var tableLat = [43.484749,43.484749,43.484749,43.484749];
var tableLng = [5.6075359,5.6075359,5.6075359,5.6075359];

class Map extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      latM: this.latValue(),
      lngM: this.lngValue(),
      compteur: this.tableLength(),
      mapPosition: {
      lat: 43.484749,
      lng: 5.6075359
     },
    }
   }

   tableLength = () =>{
     const result =[]
     if(tableLng.length !==0){
      result.push(0)
     }
    for (let i = 0; i < tableLng.length -1; i++) {
      result.push(i+1)
    }
    console.log(result)
    return (result)
     }

     latValue = () =>{
      const result =[]
     for (let i = 0; i < tableLng.length -1; i++) {
       result.push(tableLat[i])
     }
     console.log(result)
     return (result)
      }
      lngValue = () =>{
        const result =[]
       for (let i = 0; i < tableLng.length -1; i++) {
         result.push(tableLng[i])
       }
       console.log(result)
       return (result)
        }
      
/**
  * When the user types an address in the search box
  * @param place
  */
 onPlaceSelected = ( ) => {
      const lngSearch = [2.2776649,5.6075359,5.448625,5.548625];
     const latSearch = [48.824529,43.484749,43.5233359,43.5233359];
  // Set these values in the state.
    this.setState({
      lngM: lngSearch,
      latM: latSearch,
    })
    console.log(this.state.latM,'well..')
   };
      
    

render(){
  const {compteur,latM,lngM} = this.state
  console.log('grandis..',latM,latM[0])
const AsyncMap = withScriptjs(
   withGoogleMap(
    props => (
     <GoogleMap google={this.props.google}
      defaultZoom={this.props.zoom}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
     >
      {/* For Auto complete Search Box */}
      <Autocomplete
       style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
       }}
       onPlaceSelected={ this.onPlaceSelected }
       types={['(regions)']}
      />
{/*Marker*/}
{compteur.map((valeur,index) => (

      <Marker 
          key={index}
          google={this.props.google}
          name={'Dolores park'}
          draggable={true}
          onDragEnd={ this.onMarkerDragEnd }
          position={{ lat: latM[valeur], lng: lngM[valeur] }}
      />
      ))
    }
{/* InfoWindow on top of marker */}

</GoogleMap>

)
   )
  );
let map;

   map = <div>

     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9NmSEZ5yFzs54PBpzbsIZyLjMWt7P_us&libraries=places"
      loadingElement={
       <div style={{ height: `100%` }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: `100%` }} />
      }
     />
    </div>

  return( map )
 }
}
export default Map