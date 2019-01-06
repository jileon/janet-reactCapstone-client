import React from 'react';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from 'react-spinkit';
export class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.dispatch(login('demouser', 'demouser123'));
  }

  render() {
    if (this.props.loggedIn) return <Redirect to="/news" />;
    return (
      <section>
        <Spinner spinnername="circle" fadeIn="none" />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Demo);
