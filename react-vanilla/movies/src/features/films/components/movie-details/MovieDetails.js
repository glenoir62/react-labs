import React, {Component} from 'react';

export default class MovieDetails extends Component {

    render() {

        if (this.props.movie) {
            return (<div className="w-25 border p-4 d-flex flex-column">
                <h5>{this.props.movie.title}</h5>
                <hr className="w-100"/>
                <div>
                    <img className='d-block mx-auto w-100' src={this.props.movie.img}/>
                </div>
                <hr className="w-100"/>
                <span className="text-secondary">{this.props.movie.details}</span>
                <span>{this.props.movie.description}</span>
            </div>)

        } else {
            return (<div className="alert alert-warning" role="alert">
                No movie Detail
            </div>)
        }
    }

}
