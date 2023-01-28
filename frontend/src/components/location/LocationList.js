import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetLocationsMutation } from '../../reducers/locations/locationSlice';
import { useEffect } from 'react';
import { selectAllLocations } from '../../reducers/locations/locationSlice';
import { useState } from 'react';

function LocationList() {

  const coordinates = useSelector((state) => state.coordinates);
  const [locations, setLocations] = useState([]);
  const [getLocations, {isLoading}] = useGetLocationsMutation();

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations(coordinates).unwrap();
      console.log(locations);
    }
    fetchLocations();
  }, [coordinates]);

  return (
    <h1>Location List</h1>
  )
}

export default LocationList