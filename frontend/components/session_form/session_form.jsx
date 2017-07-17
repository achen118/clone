import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    console.log(this.props);
    const { formType, loggedIn, errors } = this.props;
    let redirect;
    if (loggedIn) {
      redirect = <Redirect to='/' />;
    }
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
            onChange={ this.update('username') }
            value={ this.state.username }
          />
          <input
            type="password"
            onChange={ this.update('password') }
            value={ this.state.password }
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
