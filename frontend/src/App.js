import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Locations from './components/location/Locations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}></Route>
        <Route path="/location/:lat/:long" element={<Locations/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
