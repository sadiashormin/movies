import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
        <li><a href="/#section1"  rel="noopener noreferrer">Most popular Natok</a></li>
        <li><a href="/#section2"  rel="noopener noreferrer">Eid Natok</a></li>
        <li><a href="/#section3"   rel="noopener noreferrer">Popular Bangla Movies</a></li>
        <li><a href="/#section4"   rel="noopener noreferrer">Popular Hindi Movies</a></li>
        </ul>
      </nav>
    );
  }
}
