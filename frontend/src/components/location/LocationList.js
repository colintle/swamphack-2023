import { useSelector } from 'react-redux';
import { useGetLocationsMutation } from '../../reducers/locations/locationSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LocationList() {

  const coordinates = useSelector((state) => state.coordinates);
  const [locations, setLocations] = useState([]);
  const [getLocations, {isLoading}] = useGetLocationsMutation();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations(coordinates).unwrap();
      console.log(locations);
    }
    if (coordinates.lat != null && coordinates.long != null)
    {
      fetchLocations();
    }
    else{
      navigate("/");
    }
  }, []);

  return (
    <h1>Location List</h1>
  )
}

export default LocationList