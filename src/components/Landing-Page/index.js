import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import HeaderBarBlack from '../header-black';

import '../css/landing.css';
export class LandingPage extends React.Component {
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/news" />;
    }
    return (
      <section className="intro-page-landing">
        <div className="intro-hero" />
        <div className="intro-text">
          <h1>
            Welcome <br /> to Newsflash<span className="period">.</span>
          </h1>
          <div className="intro-controls">
            <a href="#newsflash">
              {' '}
              <button type="button">Learn More</button>
            </a>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
        <HeaderBarBlack class="header-title-black" />

        <section className="about-newsflash-intro">
          <div id="newsflash" name="newsflash" className="scroll-div" />
          <h1>
            Organize Your Reading Lists<span className="period">.</span>
          </h1>
          <div className="about-newsflash-txt">
            <p>
              Jumping around sources and websites on different tabs is
              frustrating. Newsflash lets you browse different articles from
              multiple sources all in one place. If you want to save an article
              to read later, simply create a folder to save your article in and
              come back to it when you're ready. No need to bookmark everything
              only to get lost in a disorganized void.
            </p>

            <div className="txt-controls ">
              <Link to="/registeruser">
                <button type="button">Sign Up</button>
              </Link>
              <Link to="/demo">
                <button type="button">Try a Demo</button>
              </Link>
            </div>
            <p className="beta">
              Newsflash is still in beta and new features are being added.
            </p>
          </div>

          <div className="about-how-to">
            <h1>
              Save your articles in one place<span className="period">.</span>
            </h1>
            <div>
              <p>
                Instead of having everything scrambled together, customize your
                reading lists to your needs.
              </p>
            </div>
            <div className="how-to-gif">
              <img src={require('../../images/howto3.gif')} alt="how-to-use" />
            </div>
          </div>
          <div className="landing-footer">
            <p>
              <a
                href="https://iamjanetleon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built and Designed by Janet Leon
              </a>
              <br /> <br /> Powered by news.api.org
            </p>
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
