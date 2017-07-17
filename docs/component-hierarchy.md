# Component Hierarchy #

### AuthFormContainer ###
* AuthForm

### SidebarContainer ###
* Sidebar

### HomeContainer ###
* Sidebar
* NotesContainer

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
* Sidebar
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
'/home'  | HomeContainer
'/new-note'  | NewNoteContainer
'/create-notebook'  | CreateNotebookContainer
'/create-tag'  | CreateTagContainer
'/search'  | SearchPageContainer
'/notebook-search'  | NotebookSearchContainer
'/tag-search'  | TagSearchContainer
'/search-results'  | SearchContainer
'/home/notes/:noteId'  | NotesContainer
'/home/notebooks/:notebookId/notes/:noteId'  | NotebookContainer
'/home/tags/:tagId/notes/:noteId'  | TagContainer
