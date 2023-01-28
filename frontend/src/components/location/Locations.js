import React from 'react'
import LocationList from './LocationList';
import Map from '../map/Map';

function Locations() {
  return (
    <>
      <h1>Locations</h1>
      <Map/>
      <LocationList/>
    </>
  )
}

export default Locations