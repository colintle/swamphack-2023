import {useEffect} from 'react';
import {useGeolocated} from 'react-geolocated';
import { useGetLocationsMutation } from '../../reducers/locations/locationSlice';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap/Button';

function Home() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
          useGeolocated({
              positionOptions: {
                  enableHighAccuracy: false,
              },
              userDecisionTimeout: 5000,
          });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>
            <Link to={`/location/${coords.latitude}/${coords.longitude}`}>Click Me</Link>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default Home