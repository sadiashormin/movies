import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
        <li><a href="/#section1"  rel="noopener noreferrer">Bangla Natok</a></li>
        <li><a href="/#section2"  rel="noopener noreferrer">Bangla Movies</a></li>
        <li><a href="/#section3"   rel="noopener noreferrer">Hindi Movies</a></li>
        <li><a href="/#section4"   rel="noopener noreferrer">English Movies</a></li>
        </ul>
      </nav>
    );
  }
}
