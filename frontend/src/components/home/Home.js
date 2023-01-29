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
            <div><button className='button'><Link to={`/locations`}>Take me somewhere</Link></button>
            </div>
            <div className="banner">
                <h2>Let Adventure Roulette be your guide to the unknown</h2>
            </div>
            <div className="name">
                <h5>By: Colin Tran Le, Van Phat Phan, Van Trieu Phan, Jerry Wang</h5>
            </div>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default Home