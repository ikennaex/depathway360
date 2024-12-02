import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Contactus from './Pages/Contactus';
import Donate from './Pages/Donate';
import Programs from './Pages/Programs/Programs';
import ProgramDetails from './Pages/Programs/ProgramDetails';
import BlogPage from './Pages/Blog/BlogPage';
import BlogPost from './Pages/Blog/BlogPost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import axios from "axios";
import Admin from './Pages/Admin/Admin';
import Publish from './Pages/Admin/BlogPost/Publish';
import EditPage from './Pages/Admin/BlogPost/EditPage';
import Boardmembers from './Pages/Boardmembers/Boardmembers';
import Actofkindness from './Pages/Programs/Actofkindness';
import Gallery from './Pages/Gallery';

axios.defaults.withCredentials = true;

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
          <Route path='/gallery' element = {<Gallery />} />
          <Route path='/programs/sendachildtoschoolproject' element = {<ProgramDetails />} />
          <Route path='/programs/actofkindness' element = {<Actofkindness />} />
          <Route path='/blog' element = {<BlogPage />} />
          <Route path='/blog/:id' element = {<BlogPost />} />
          <Route path='/board' element = {<Boardmembers />} />
        </Route>
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/admin' element = {<Admin />} />
          <Route path='/publish' element = {<Publish />} />
          <Route path='/admin/edit/:id' element = {<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
