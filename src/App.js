import './App.css';
import MovieGallery from './components/MovieGallery';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1 className='logo'>Netflex</h1>
      <MovieGallery gallerySearch="the matrix" />
      <MovieGallery gallerySearch="naruto" />
      <MovieGallery gallerySearch="attack on titan" />
    </div>
  );
}

export default App;
