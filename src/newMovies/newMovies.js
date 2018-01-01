import React from 'react';
import {Link} from 'react-router-dom';
import './newMovies.css';
let json  = require('../data.json');
export class NewMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let movies = json.results;
    this.setState({ movies });
  }

  render() {
    return(
      <section>
        <h2>Most Popular</h2>
        <div className="newMovies">
          {this.state.movies.map((movie, index) => {
            return (
              <Link to={`/movie/${this.state.movies[index].id}`} key={index} className="movieLink">
              
             
                <img src={this.state.movies[index].poster_path === null ? '../archive/640.png' : `../${this.state.movies[index].poster_path}`} alt={`${this.state.movies.title} poster`} className="imgResponsive" />

                <div className="movieInfo">
                  <h3>{this.state.movies[index].title}</h3>
                  <p>{this.state.movies[index].release_date}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
}
