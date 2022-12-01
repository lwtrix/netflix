import { Container } from "react-bootstrap"
import MovieGallery from "./MovieGallery"

const TvShows = () => {
    return (
        <>
            <MovieGallery gallerySearch="the matrix" />
            <MovieGallery gallerySearch="naruto" />
            <MovieGallery gallerySearch="attack on titan" />
        </>     
    )
}

export default TvShows;