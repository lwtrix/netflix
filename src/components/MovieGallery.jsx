import { Component } from "react"
import './css/movie-gallery.css'
import Spinner from "./Spinner"
import { Row, Col } from "react-bootstrap"


export default class MovieGallery extends Component {

    state = {
        gallery: [],
        isFetching: true
    }

    gallerySearch = this.props.gallerySearch ? this.props.gallerySearch : 'arc'

    fetchGallery = async () => {
        setTimeout(async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=37697e59&s=${this.gallerySearch}`);

            const data = await res.json()
            this.setState({
                gallery: data.Search,
                isFetching: false
            })
        }, 1000)
        
    }

    componentDidMount = () => {
        this.fetchGallery()
    }

    render() {

        const { gallery, isFetching} = this.state;
        return (
            <>
                {isFetching ? <Spinner /> : 
                
                <div className="d-flex gallery">
                {
                    gallery.map((movie) => (
                        <div key={movie.imdbID} className='gallery-movie'>
                            <h5>{movie.Title}</h5>
                            <img src={movie.Poster}/>
                        </div>
                    ))
                }
                </div>}
                <h2 className="text-capitalize gallery-title">{this.gallerySearch} Collection</h2>
                
            </>
            
        )
    }
    
}