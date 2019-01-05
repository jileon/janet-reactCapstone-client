import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
export class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.loggedIn) {
      return <Redirect to="/news" />;
    }
    return (
      <section>
        Landing Page
        <Link to="/login">
          <button>Login</button>
        </Link>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
