import React from 'react';
import {Header} from './header/header';
import {Form} from './form/form';
import {Movies} from './movies/movies';
import {Link} from 'react-router-dom';
let json  = require('./data.json');
export class ShowAll extends React.Component {
  constructor(props) {
   
    super(props);
    
    this.state = {
      all: []
    }
  }

  componentDidMount() {
    let data = json.results;
    let all = data.filter(m=>m.video_path.toLowerCase().includes('/'+this.props.match.params.all));
    this.setState({ all });
  }
  render() {
    return(
      <div className="container">
        <Header />
        <Form />
        <div>
          <span className="sectionHeader" id="section1">{this.props.match.params.all}</span>
          <Link to={"/movies/Bangla Natok"} className="seeAllLink">
              SEE ALL
          </Link>
        </div>
        <Movies movies={this.state.all} />
      </div>
    );
  }
}
