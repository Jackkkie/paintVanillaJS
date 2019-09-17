import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, summary, poster, year, rating, genres }) {
    return <div className="movie">
        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/star.jpg"
            alt={title} title={title} />
        {/* <img src={poster} alt={title} title={title} /> */}
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary.slice(0, 150)}...</p>
        </div>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;