import {useGeolocated} from 'react-geolocated';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { addCoords } from '../../reducers/coordinates/coordSlice';
import { useNavigate } from 'react-router-dom';
const logo=require('./logo.png');
function Home() {
    const dispatch = useDispatch();
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
          useGeolocated({
              positionOptions: {
                  enableHighAccuracy: false,
              },
              userDecisionTimeout: 5000,
          });
    
    if (coords) {
        dispatch(addCoords({lat: coords.latitude, long: coords.longitude}));
    }

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
       
        <div>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div><button className='button'><Link to={`/locations`}>Next Page for Locations</Link></button>
            </div>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default Home