import React, { Component } from 'react';


class NavBar extends Component {
    render() { 
      console.log('navbar - rendered')
        return (
          <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="..">
                Navbar
              </a>
          </nav>
        );
    }
}

export default NavBar;