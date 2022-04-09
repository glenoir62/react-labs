import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';

export default (props) => {
    return (
        <>
            <SearchBar updateMovies={props.updateMovies} />
            {props.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                    <MovieList
                        movies={props.movies}
                        updateSelectedMovie={props.updateSelectedMovie} />
                    <MovieDetails movie={props.movies[props.selectedMovie]} />
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

<div className="alert alert-warning" role="alert">
    A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
</div>
