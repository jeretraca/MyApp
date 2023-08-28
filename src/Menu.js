import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from "next/link"; 

class Menu extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="navbar">
                <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/speakers" className='nav-link'>
                                Speakers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sessions" className='nav-link'>
                                Sessions
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>
      
    );
  }
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
