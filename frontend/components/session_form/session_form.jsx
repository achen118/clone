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
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemo(event) {
    event.preventDefault();
    this.props.signin({
      userCredential: "demo@appacademy.com",
      password: "password"
    });
  }

  render() {
    const { formType, loggedIn, errors } = this.props;
    const isEmail = new RegExp('\@');
    return (
      <div className="session-page">
        <header className="session-page-header">
          <figure>
            <img src='https://res.cloudinary.com/malice/image/upload/v1500404473/clevernotelogo_sss5gi.png' alt='CleverNote Logo' />
          </figure>
          <h1 className="header-name">CLEVERNOTE</h1>
        </header>
        <section className="session-form">
          <form onSubmit={ this.handleSubmit }>
            <h1 className="session-title">
              { formType === 'signup' ? 'Create Account' : 'Sign in' }
            </h1>
            <br />
            <ul className="errors">
              { errors.map((error, idx) => <li key={ idx }>{ error }</li>) }
            </ul>
            <input
              type="text"
              onChange={ this.update('userCredential') }
              value={ this.state.userCredential }
              placeholder={ formType === 'signup' ?
                "Your email address" :
                "Email address or username"
              }
            />
            <br />
            <input
              type="password"
              onChange={ this.update('password') }
              value={ this.state.password }
              placeholder={ formType === 'signup' ?
                "Create a password" :
                "Password"
              }
            />
            <br />
            <button>
              { formType === 'signup' ? 'Create Account' : 'Sign in' }
            </button>
            <button onClick={ this.handleDemo }>
              Demo
            </button>
          </form>
        </section>
        <section className="session-links">
          { formType === 'signup' ?
            <div>
              <p className="already-have-account">Already have an account?</p>
              <br />
              <Link to='/signin' className="session-link">Sign in</Link>
            </div> :
            <div>
              <p>Don't have an account?</p>
              <br />
              <Link to='signup' className="session-link">Create account</Link>
            </div>
          }
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
