import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NotesContainer from './notes/notes_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/notes/:noteId" component={ NotesContainer } />
      <ProtectedRoute path="/notes" component={ NotesContainer } />
      <AuthRoute exact path="/" component={ SessionFormContainer } />
      <AuthRoute exact path="/signin" component={ SessionFormContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
    </Switch>
  </div>
);

export default App;
