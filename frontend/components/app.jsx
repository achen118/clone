import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NotesContainer from './notes/notes_container';
import SidebarContainer from './sidebar/sidebar_container';
import NewNotebookContainer from './notebooks/new_notebook_container';
import NewTagContainer from './tags/new_tag_container';

class App extends React.Component {

  hideUserDropDown(event) {
    const dropdown = document.querySelector('.user-dropdown');
    const userPic = document.querySelector('.user-img');
    if (dropdown) {
      if (event.target !== dropdown && event.target !== userPic) {
        dropdown.classList.add('hidden');
      }
    }
  }

  render() {
    return (
      <div onClick={ this.hideUserDropDown }>
        <Switch>
          <ProtectedRoute path="/tags/:tagName/notes/:noteId" component={ NotesContainer } />
          <ProtectedRoute path="/tags/:tagName" component={ NotesContainer } />
          <ProtectedRoute exact path="/tags" component={ NotesContainer } />
          <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={ NotesContainer } />
          <ProtectedRoute path="/notebooks/:notebookId" component={ NotesContainer } />
          <ProtectedRoute exact path="/notebooks" component={ NotesContainer } />
          <ProtectedRoute path="/notes/:noteId" component={ NotesContainer } />
          <ProtectedRoute path="/notes" component={ NotesContainer } />
          <ProtectedRoute path="/new-tag" component={ NewTagContainer } />
          <ProtectedRoute path="/new-notebook" component={ NewNotebookContainer } />
          <ProtectedRoute path="/new-note" component={ NotesContainer } />
          <AuthRoute exact path="/" component={ SessionFormContainer } />
          <AuthRoute exact path="/signin" component={ SessionFormContainer } />
          <AuthRoute exact path="/signup" component={ SessionFormContainer } />
        </Switch>
      </div>
    );
  }

}

export default App;
