import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredential: "",
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
      <div className="session-page">
        { redirect }
        <header className="session-page-header">
          <figure>
            <img src='http://res.cloudinary.com/malice/image/upload/v1500352765/b67ad20a28598055a2bb0950e8135d5d_nei98q.png' alt='CleverNote Logo' />
          </figure>
          <h1 className="header-name">CLEVERNOTE</h1>
        </header>
        <form onSubmit={ this.handleSubmit }>
          <h1>{ formType === 'login' ? 'Log In' : 'Sign Up' }</h1>
          <ul>
            { errors.map((error, idx) => <li key={ idx }>{ error }</li>) }
          </ul>
          <input
            type="text"
            onChange={ this.update('userCredential') }
            value={ this.state.userCredential }
            placeholder={ formType === 'login' ?
              "Email address or username" :
              "Email address" }
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
