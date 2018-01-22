import React from 'react';
import { Header } from '../header/header';
import { Form } from '../form/form';
import { Cast } from '../cast/cast';
import './movie.css';
import { Player, ControlBar } from 'video-react';

let json  = require('../data.json');

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
    
    const encodedPath = decodeURIComponent(window.location.pathname.substring(7));
    let results = json.results.filter(m =>m.split('/').pop() == encodedPath);
    let vsrc=results && results[0] +"/"+results[0].split('/').pop()+".mp4" ;
    let title=results[0].split('/').pop();
    this.setState({ vsrc });
    this.setState({ title });
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
            src={'../'+ this.state.vsrc }
            autoPlay={true}
          />
        </div>
        {/* <Cast cast={this.state.movie.credits.cast} /> */}
        <div className="movieDetails">
            <h2 className="sectionTitle">{this.state.movie.title}</h2>
            {/* <ul className="detailsList">
              <li><span className="bold">Genres: </span> {this.state.movie.genres.map((element, index) => {
                if (index < this.state.movie.genres.length - 1) {
                  return this.state.movie.genres[index].name + ', '
                } else {
                  return this.state.movie.genres[index].name
                }
              })}
              </li>
            </ul> */}
            <p>{this.state.movie.overview}</p>
          </div>
      </div>
    );
  }
}
