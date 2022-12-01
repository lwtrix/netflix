import { Link } from "react-router-dom";

const SingleMovie = ({ id, img, title }) => {
    console.log()
  return (
    <Link to={`/details/${id}`}>
      <div className="gallery-movie">
        <h5>{title}</h5>
        <img src={img} />
      </div>
    </Link>
  );
};

export default SingleMovie;
