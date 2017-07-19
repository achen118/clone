import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import NotesContainer from './notes/notes_container';
import SidebarContainer from './sidebar/sidebar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={ SessionFormContainer } />
      <AuthRoute exact path="/signin" component={ SessionFormContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <ProtectedRoute path="/" component={ SidebarContainer } />
      <ProtectedRoute exact path="/notes" component={ NotesContainer } />
    </Switch>
  </div>
);

export default App;
