import React from 'react';
import {FormResults} from './formResults';
import search from './search.svg';
import './form.css';
let data  = require('../data.json');

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }
    let results = data.results.filter(
      m=>m.toLowerCase().split('/').pop().includes(val.toLowerCase())
    );
    this.setState({ results });  
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id="form">
        <img src={search} alt="search icon" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
        <FormResults movies={this.state.results} />
      </form>
    );
  }
}
