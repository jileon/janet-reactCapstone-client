import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './css/register-login.css';
import HeaderBarBlack from './header-black';

export function UserLogin(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/news" />;
  }

  return (
    <section>
      <HeaderBarBlack class="header-title-black" />
      <div className="backimage" />
      <div className="home">
        <LoginForm />
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserLogin);
