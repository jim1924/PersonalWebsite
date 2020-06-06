import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Networks from './Networks';


const Header =(props)=> {
  const {name, occupation, jobDescription, headerStatement, employer, city}=props.data;
  const networks = <Networks social={props.data.social}/>;

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
                Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
                About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
                Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
                Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
                Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
                Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
              I'm a <span>{city}</span> based <span>{occupation}</span>{headerStatement}
            <span>{employer}</span> as a<span> {jobDescription}</span>.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
};

Header.propTypes={
  data: PropTypes.object.isRequired,
};

export default Header;
