import React from 'react';
import './cast.css';

export class Cast extends React.Component {
  render() {
    const link = '../';
    return(
      <div>
        <h3>{this.props.cast && this.props.cast.length && 'Cast' }</h3>
        <div className="figureContainer">
          {this.props.cast && this.props.cast.length>0 && this.props.cast.slice(0, 6).map((element, index) => {
            return(
              <figure key={index}>
                <img src={this.props.cast[index].profile_path === null ? '../archive/640.png' : link + this.props.cast[index].profile_path} key={index} alt={this.props.cast[index].name} className="imgResponsive" />
                <figcaption>{this.props.cast[index].name}</figcaption>
              </figure>
            )

          })}
        </div>
      </div>
    );
  }
}
