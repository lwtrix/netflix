import './App.css';
import MovieGallery from './components/MovieGallery';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import TvShows from './components/TvShows';
import NotFound from './components/NotFound';
import NavbarMain from './components/Navbar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <NavbarMain />
         <Routes>
           <Route element={<TvShows />} path='/' />
           <Route element={<MovieDetails />} path='/details/:id' />
           <Route element={<NotFound />} path='*' />
         </Routes>
      </div>
    </BrowserRouter>

   
  );
}

export default App;
