import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Contactus from './Pages/Contactus';
import Donate from './Pages/Donate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Homepage />} />
          <Route path='/aboutus' element = {<AboutUsPage />} />
          <Route path='/contact' element = {<Contactus />} />
          <Route path='/donate' element = {<Donate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
