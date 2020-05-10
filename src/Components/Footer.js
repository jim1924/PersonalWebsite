import React, {Component} from 'react';
import Networks from './Networks';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links"><Networks social={this.props.data.social}/></ul>
            <ul className="copyright">
              <li>
                &copy; Copyright {new Date().getFullYear() }{' '}
                <a
                  title="Dimitris Selalmazidis"
                  href="http://www.dimitris-selalmazidis.com/"
                >
                  Dimitris Selalmazidis
                </a>
              </li>
              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
