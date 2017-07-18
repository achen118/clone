import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const { formType, loggedIn, errors } = this.props;
    let redirect;
    if (loggedIn) {
      redirect = <Redirect to='/' />;
    }
    const isEmail = new RegExp('\@');
    return (
      <div>
        { redirect }
        <form onSubmit={ this.handleSubmit }>
          <header>
            <h1>{ formType === 'login' ? 'Log In' : 'Sign Up' }</h1>
          </header>
          <ul>
            { errors.map((error, idx) => <li key={ idx }>{ error }</li>) }
          </ul>
          <input
            type="text"
            onChange={ this.update('usernameOrEmail') }
            value={ this.state.usernameOrEmail }
            placeholder="Email address or username"
          />
          <input
            type="password"
            onChange={ this.update('password') }
            value={ this.state.password }
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
        { formType === 'login' ?
          <Link to='/signup'>Sign Up</Link> :
            <Link to='login'>Log In</Link>
        }
      </div>
    );
  }
}

export default withRouter(SessionForm);
