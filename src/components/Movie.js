import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrump from './BreadCrump';
import MovieInfo from './MovieInfo';
// Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner></Spinner>
    if(error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrump movieTitle={movie.original_title}></BreadCrump>
            <MovieInfo movie={movie} />
        </>
    )
}

export default Movie;