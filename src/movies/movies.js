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
          {this.props.movies && this.props.movies.length>0 && this.props.movies.map((movie, index) => {
            return (
              <Link to={`/movie/${this.props.movies[index].split('/').pop()}`} key={index} className="movieLink">
                <img src={"../"+this.props.movies[index]+"/"+this.props.movies[index].split('/').pop()+".jpg" } alt={this.props.movies[index].split('/').pop()} className="imgResponsive" />
                <div className="movieInfo">
                  <h3>{this.props.movies[index].title}</h3>
                  <p>{this.props.movies[index].release_date}</p>
                  
                   {/* <div className="moviePlay" style={{ backgroundImage: 'url(/btn-overlay-orange.png)' }}> 
                    fffff
                   </div> */}
                </div>
                {/* <img className="moviePlay"src='/btn-overlay-orange.png' style={{ width: "20px" }} />  */}
              </Link>
            )
          })}
        </div>
        
      </section>
    );
  }
}
