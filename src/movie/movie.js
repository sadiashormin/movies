import React from 'react';
import { Header } from '../header/header';
import { Form } from '../form/form';
import { Cast } from '../cast/cast';
import './movie.css';
import { Player, ControlBar } from 'video-react';
import mp4 from '../movie/trailer_hd.mp4';
let json  = require('../newMovies/movie_list.json');

export class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        genres: [],
        credits: {
          cast: [],
          crew: []
        }
      }
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    const id = window.location.pathname.substring(7);
    debugger;
    let results = json.results.filter(m =>m.id == id);
    let movie=results && results[0];
    this.setState({ movie });
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Form id="form" />
        <div className="moviePage">
          <Player className="movieVideo"
            playsInline
            src={mp4}
            autoPlay={true}
          />
        </div>
        <Cast cast={this.state.movie.credits.cast} />
        <div className="movieDetails">
            <h2 className="sectionTitle">{this.state.movie.title}</h2>
            <ul className="detailsList">
              <li><span className="bold">Genres: </span> {this.state.movie.genres.map((element, index) => {
                if (index < this.state.movie.genres.length - 1) {
                  return this.state.movie.genres[index].name + ', '
                } else {
                  return this.state.movie.genres[index].name
                }
              })}
              </li>
            </ul>
            <p>{this.state.movie.overview}</p>
          </div>
      </div>
    );
  }
}
