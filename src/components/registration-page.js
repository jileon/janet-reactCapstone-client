import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './css/register-login.css';
import RegistrationForm from './registration.form';
import HeaderBarBlack from './header-black';
export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/news" />;
  }
  return (
    <section>
      <HeaderBarBlack class="header-title-black" />
      <div className="backimage" />
      <div className="home">
        <RegistrationForm />
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
