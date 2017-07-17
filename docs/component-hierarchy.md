# Component Hierarchy #

### App ###
* Sidebar

### AuthFormContainer ###
* AuthForm

### SidebarContainer ###
* Sidebar

### NotesIndexContainer ###
* NotesIndex

### NotesIndexItemContainer ###
* NotesIndexItem

### NotesContainer ###
* NotesHeader
* NotesIndexContainer
* NoteDetailContainer

### NoteDetailContainer ###
* NoteDetail
* Note

### NotebookContainer ###
* NotebookHeader
* NotesIndexContainer
* NoteDetailContainer

### TagContainer ###
* TagHeader
* NotesIndexContainer
* NoteDetailContainer

### NotebooksIndexContainer ###
* NotebooksIndex

### NotebooksIndexItemContainer ###
* NotebooksIndexItem

### TagsIndexContainer ###
* TagsIndex

### TagsIndexItemContainer ###
* TagsIndexItem

### NewNoteContainer ###
* NewNote

### NewNotebookContainer ###
* NewNotebook

### NewTagContainer ###
* NewTag

### SearchResultsContainer ###
* SearchBarContainer
* NotesIndexContainer
* NoteDetailContainer

### SearchBarContainer ###
* SearchBar

### NotebookSearchContainer ###
* NotebookSearch

### TagSearchContainer ###
* TagSearch

# Routes #

Path  | Component
------------- | -------------
'/sign-up'  | AuthFormContainer
'/sign-in'  | AuthFormContainer
'/new-note'  | NewNoteContainer
'/new-notebook'  | NewNotebookContainer
'/new-tag'  | NewTagContainer
'/search'  | SearchBarContainer
<!-- '/notebook-search'  | NotebookSearchContainer
'/tag-search'  | TagSearchContainer -->
'/search-results'  | SearchResultsContainer
'/notes/:noteId'  | NotesContainer
'/notebooks/:notebookId/notes/:noteId'  | NotebookContainer
'/tags/:tagName/notes/:noteId'  | TagContainer
