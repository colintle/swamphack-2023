import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useGetLocationsMutation } from '../../reducers/locations/locationSlice';

function LocationList() {

  const {lat, long} = useParams();

  const [getLocations, {isLoading}] = useGetLocationsMutation();

  const fetchLocations = async () => {
    const object =  await getLocations({lat, long}).unwrap();
    console.log(object);
  }

  return (
    <button onClick={fetchLocations}>
      Click me
    </button>
  )
}

export default LocationList