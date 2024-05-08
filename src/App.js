import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Contactus from './Pages/Contactus';
import Donate from './Pages/Donate';
import Programs from './Pages/Programs/Programs';
import ProgramDetails from './Pages/Programs/ProgramDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Homepage />} />
          <Route path='/aboutus' element = {<AboutUsPage />} />
          <Route path='/contact' element = {<Contactus />} />
          <Route path='/donate' element = {<Donate />} />
          <Route path='/programs' element = {<Programs />} />
          <Route path='/programs/sendachildtoschoolproject' element = {<ProgramDetails />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
