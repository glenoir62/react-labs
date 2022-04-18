import React, {Component} from 'react';
import MovieElement from './MovieElement/MovieElement';
import {MovieDetails} from "../index";

export default class MovieList extends Component {

    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap justify-content-center'>
                {this.props.movies && this.props.movies.length > 0 ?
                    (
                        this.props.movies.map((m, index) => (
                            <MovieElement key={m.title + index}
                                          movie={m}
                                          updateSelectedMovie={() => { this.props.updateSelectedMovie(index) }}
                                          isFavori={ this.props.favoris.includes(m.title) }
                                          addFavori={ this.props.addFavori }
                                          removeFavori={ this.props.removeFavori } />
                        ))
                    ) : (<div className="alert alert-warning" role="alert">
                        No movies
                    </div>)
                }
            </div>
        );
    }

}
