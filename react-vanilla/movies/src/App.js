import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading, SearchBar } from './components';

import dataMovies from "./data";
import * as axios from 'axios';
import apiMovie from './conf/api.movie';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false
        }
    }

    componentDidMount() {
        apiMovie.get('/discover/movie')
            .then( response => response.data.results )
            .then( moviesApi => {
                const movies = moviesApi.map(m => ({
                    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
                    title: m.title,
                    details: m.release_date + ' | ' + m.vote_average + ' /10 (' + m.vote_count + ')',
                    description: m.overview
                }));
                this.updateMovies(movies);
            })
            .catch ( err => console.log(err));
    }

    updateMovies = (movies) => {
        this.setState({
            movies,
            loaded: true
        })
    }

    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <SearchBar updateMovies={ this.updateMovies } />

                { this.state.loaded ? (
                    <div className="d-flex flex-row flex-fill pt-4 p-2" >
                        <MovieList
                            movies={ this.state.movies }
                            updateSelectedMovie={ this.updateSelectedMovie }/>
                        <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

export default App;