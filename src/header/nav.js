import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
        <li><a href="/"  rel="noopener noreferrer">Most popular</a></li>
        <li><a href="/"  rel="noopener noreferrer">Most viewed</a></li>
        </ul>
      </nav>
    );
  }
}
