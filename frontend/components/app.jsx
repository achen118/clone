import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import NotesContainer from './notes/notes_container';
import SidebarContainer from './sidebar/sidebar_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/sidebar" component={ SidebarContainer } />
      <AuthRoute exact path="/" component={ SessionFormContainer } />
      <AuthRoute exact path="/signin" component={ SessionFormContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <AuthRoute path="/notes/:noteId" component={ NotesContainer } />
    </Switch>
  </div>
);

export default App;
