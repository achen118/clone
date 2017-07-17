# Component Hierarchy #

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
* NotesIndex
* NoteDetail

### NoteDetailContainer ###
* NoteDetail
* Note

### NotebookContainer ###
* NotebookHeader
* NotesIndex
* NoteDetail

### TagContainer ###
* TagHeader
* NotesIndex
* NoteDetail

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

### CreateNotebookContainer ###
* CreateNotebook

### CreateTagContainer ###
* CreateTag

### SearchContainer ###
* SearchHeader
* NotesIndex
* NoteDetail

### SearchPageContainer ###
* Search

### NotebookSearchContainer ###
* NotebookSearch

### TagSearchContainer ###
* TagSearch

# Routes #

Path  | Component
------------- | -------------
'/sign-up'  | AuthFormContainer
'/sign-in'  | AuthFormContainer
'/home'  | NotesContainer
'/new-note'  | NewNoteContainer
'/create-notebook'  | CreateNotebookContainer
'/create-tag'  | CreateTagContainer
'/search'  | SearchPageContainer
'/notebook-search'  | NotebookSearchContainer
'/tag-search'  | TagSearchContainer
'/search-results'  | SearchContainer
'/notes/:noteId'  | NotesContainer
'/notebooks/:notebookId/notes/:noteId'  | NotebookContainer
'/tags/:tagId/notes/:noteId'  | TagContainer
