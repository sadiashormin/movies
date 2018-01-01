import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './nav';
import logo from '../logo.png';
import './header.css';

export class Header extends React.Component {
  
  render() {
    let style={
      width:"24px"
    }
    return(
      <header>
        <Link to={'/'}><h1><img style={style} src={logo} alt="Moviee logo" /> TE</h1></Link>
        <Nav />
      </header>
    );
  }
}

 