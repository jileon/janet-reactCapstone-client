import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import HeaderBarBlack from '../header-black';
import './landing.css';
export class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.loggedIn) {
      return <Redirect to="/news" />;
    }
    return (
      <section className="intro-page-landing">
        <div className="intro-hero" />
        <div className="intro-text">
          <h1>
            Welcome to Newsflash<span className="period">.</span>
            <button>Learn More</button>
          </h1>
        </div>
        <HeaderBarBlack class="header-title-black" />

        <div className="about-newsflash" />

        {/* <Link to="/login">
          <button>Login</button>
        </Link> */}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
