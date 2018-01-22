import React from 'react';
import {Link} from 'react-router-dom';
import './formResults.css';

export class FormResults extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }

  render() {
    const link = '../';
    return(
      <ul id="results" onClick={this.handleClick}>
        {this.props.movies.map((element, index) => {
          return(
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.movies[index].split('/').pop()}`} >
                <img src={"../"+this.props.movies[index]+"/"+this.props.movies[index].split('/').pop()+".jpg" } alt={this.props.movies[index].split('/').pop()} className="resultPoster" />
                <div>
                  <p>{this.props.movies[index].split('/').pop()}</p>
                  {/* <p>{this.props.results[index].release_date}</p> */}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}
