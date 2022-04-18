import React, {Component} from 'react';
import {Header} from './components';
import Films from './features/films';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Favoris from './features/favoris';

import dataMovies from "./data";
import * as axios from 'axios';
import apiMovie from './conf/api.movie';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false,
            favoris: []
        }
    }

    componentDidMount() {
        apiMovie.get('/discover/movie')
            .then(response => response.data.results)
            .then(moviesApi => {
                const movies = moviesApi.map(m => ({
                    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
                    title: m.title,
                    details: m.release_date + ' | ' + m.vote_average + ' /10 (' + m.vote_count + ')',
                    description: m.overview
                }));
                this.updateMovies(movies);
            })
            .catch(err => console.log(err));
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

    addFavori = title => {
        const film = {...this.state.movies.find( m => m.title === title )};
        this.setState(state => ({
            favoris: [...this.state.favoris, film]
        }));
    }

    removeFavori = title => {
        const index = this.state.favoris.findIndex( f => f.title === title );
        this.setState(state => ({
            favoris: state.favoris.filter((_, i) => i !== index)
        }));
    }


    render() {
        return (
            <Router>
                <div className="App d-flex flex-column">
                    <Header/>
                    <Routes>
                        <Route path="/films"  element={
                            <Films
                                loaded={ this.state.loaded }
                                updateMovies={ this.updateMovies }
                                updateSelectedMovie={ this.updateSelectedMovie }
                                movies={ this.state.movies }
                                selectedMovie={ this.state.selectedMovie }
                                addFavori={ this.addFavori }
                                removeFavori={ this.removeFavori }
                                favoris={ this.state.favoris.map( f => f.title ) }
                            />
                        }/>
                        <Route path="/favoris" element={Favoris}/>
                        <Route
                            path="/"
                            element={<Navigate to="/films"  />}
                        />
                    </Routes>
                </div>
            </Router>
        );

    }
}


export default App;
