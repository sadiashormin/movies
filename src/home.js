import React from 'react';
import {Header} from './header/header';
import {Form} from './form/form';
import {Movies} from './movies/movies';
let json  = require('./data.json');
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      natokList: []
    }
  }

  componentDidMount() {
    let movies = json.results;
    this.setState({ movies });
   
    let natokList = json.results.filter(m=>m.video_path.toLowerCase().includes("natok"));
    this.setState({ natokList });

    let banglaMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/bangla/"));
    this.setState({ banglaMovies });

    let hindiMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/hindi/"));
    this.setState({ hindiMovies });

    let englishMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/english/"));
    this.setState({ englishMovies });
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Form />
        <h2 id="section1">Most Popular Natoks</h2>
        <Movies movies={this.state.natokList}/>
        <h2 id="section3">Popular Bangla Movies </h2>
        <Movies movies={this.state.banglaMovies}/>
        <h2 id="section4">Popular Hindi Movies </h2>
        <Movies movies={this.state.hindiMovies}/>

        <h2 id="section4">Popular English Movies </h2>
        <Movies movies={this.state.englishMovies}/>
      </div>
    );
  }
}
