import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './css/register-login.css';
import HeaderBarBlack from './header-black';

export function UserLogin(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/news" />;
  }

  return (
    <div>
      <HeaderBarBlack />
      <div className="backimage" />

      <div className="home">
        <h2>Welcome to News Flash</h2>
        <LoginForm />

        <Link to="/registeruser">Register</Link>
        <section className="demo">
          <p>DEMO</p>
          <p>username: demouser</p>
          <p>password: demouser123</p>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserLogin);
