import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Map from './Map.js';
import './App.css';

const useStyles = makeStyles((theme) => ({

  map:{
  
    marginTop: 30,
    maxWidth: '25vw',
    height: '30vh'
  }
}));
 
function HomePage() {
  const classes = useStyles();
  return(
    <Map className ={classes.map}
    //google={this.props.google}
    height='500px'
    zoom={5}
   />

  
  )
}


export default HomePage
