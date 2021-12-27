
import NotFound from "./components/NotFound/NotFound";
import Home from './components/Home/Home';
import AddEvents from "./components/AddEvents/AddEvents";

import {

  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
 return(
 <div>
   <BrowserRouter>
   <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/addEvents">AddEvents</Link>
          </li>
        </ul>

        <hr />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="addevents" element={<AddEvents/>} />
     
      
    </Routes>
  </BrowserRouter>


 </div>)
}

export default App;
