import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute path="/" component={SessionFormContainer} />
  </div>
);

export default App;
