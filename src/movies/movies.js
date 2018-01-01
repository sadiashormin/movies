import React from 'react';
import {Link} from 'react-router-dom';
import './movies.css';

export class Movies extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <section>
       
        <div className="newMovies">
          {this.props.movies.map((movie, index) => {
            return (
              <Link to={`/movie/${this.props.movies[index].id}`} key={index} className="movieLink">
                <img src={this.props.movies[index].poster_path === null ? '../archive/640.png' : `../${this.props.movies[index].poster_path}`} alt={`${this.props.movies.title} poster`} className="imgResponsive" />
                <div className="movieInfo">
                  <h3>{this.props.movies[index].title}</h3>
                  <p>{this.props.movies[index].release_date}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
}
