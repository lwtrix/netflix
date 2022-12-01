import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=37697e59&i=${params.id}`
    );
    const data = await res.json();
    console.log(data)
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} />
      <p>{movieDetails.Plot}</p>
      <p>Release Date: {movieDetails.Released}</p>
      <p>Duration: {movieDetails.Runtime}</p>
    </>
  );
};

export default MovieDetails;
