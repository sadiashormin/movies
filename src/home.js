import React from 'react';
import {Link} from 'react-router-dom';
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
   
    let shortFilms = json.results.filter(m=>m.video_path.toLowerCase().includes("/short/")).slice(0,12);
    this.setState({ shortFilms });

    let banglaMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/bangla/")).slice(0,12);
    this.setState({ banglaMovies });

    let banglaNatok = json.results.filter(m=>m.video_path.toLowerCase().includes("/natok/")).slice(0,12);
    this.setState({ banglaNatok });

    // let hindiMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/hindi/")).slice(0,12);
    // this.setState({ hindiMovies });

    // let englishMovies = json.results.filter(m=>m.video_path.toLowerCase().includes("movies/english/")).slice(0,12);
    // this.setState({ englishMovies });
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Form />
        <div>
          <span className="sectionHeader" id="section1">Short Films</span>
          <Link to={"/movies/Short Films"} className="seeAllLink">
              SEE ALL
          </Link>
        </div>
        <Movies movies={this.state.shortFilms} />

        <div>
          <span className="sectionHeader" id="section1">Bangla Movies</span>
          <Link to={"/movies/Bangla Movies"} className="seeAllLink">
              SEE ALL
          </Link>
        </div>

        <Movies movies={this.state.banglaMovies} />

        <div>
          <span className="sectionHeader" id="section1">Bangla Natok</span>
          <Link to={"/movies/natok"} className="seeAllLink">
              SEE ALL
          </Link>
        </div>

        <Movies movies={this.state.banglaNatok} />
        {/* <h2 id="section4">Hindi Movies </h2>
        <Movies movies={this.state.hindiMovies}/>
        <h2 id="section4">English Movies </h2>
        <Movies movies={this.state.englishMovies}/> */}
      </div>
    );
  }
}
