import React from 'react'
import Map from '../map/Map';
import Thumbnail from '../thumbnail/Thumbnail';

import { useSelector } from 'react-redux';
import { useGetLocationsMutation } from '../../reducers/locations/locationSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Key} from '../../api/Key';

function Locations() {

  const coordinates = useSelector((state) => state.coordinates);
  const [locations, setLocations] = useState([]);
  const [getLocations, {isLoading}] = useGetLocationsMutation();
  const navigate = useNavigate()
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      const places = await getLocations(coordinates).unwrap();
      setPlaces(places)
    }
    if (coordinates.lat != null && coordinates.long != null)
    {
      fetchLocations();
    }
    else{
      navigate("/");
    }

    return
  }, []);


  return (
    <>
      <h1 className="location">Locations</h1>
      {places && places.map(place => (
        <div>
          <h1 className='place'>{place.name}</h1>
          <div className='detail'>
            <img  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photo_reference}&key=${Key}`}></img>
          </div>
          
          <h2 className="address">{place.address}</h2>
          <h2 className="rate">{place.rating}</h2>
          <div className="maps" >
            {place.types.map(tag => <p>{tag}</p>)}
          </div>
          
        </div>
      ))}
    </>
  )
}

export default Locations