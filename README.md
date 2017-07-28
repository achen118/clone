# CleverNote

[CleverNote live](https://clever-note.herokuapp.com)

CleverNote is a full-stack web application that serves as a faithful clone of Evernote. CleverNote utilizes Ruby on Rails v5.1.2 on the back-end, a PostgreSQL database, and a React.js with a Redux architectural framework on the front-end.

As a faithful clone of Evernote, CleverNote presents you with the capability to create and organize your notes with notebooks and tags that you can access from anywhere.

## Features & Implementation

Illustrated in my sample state, I utilized a normalized React state when building CleverNote. Below are a few of my main components and features of CleverNote.

### Notes

Each note created in CleverNote is saved in a notes table in the database, which holds each note's `id`, `author_id`, `body`, and `updated_at`. The current user has the ability to create new notes and edit their existing notes using a rich-text editor that I implemented using React Quill.

As CleverNote is predominantly a single-page app, the majority of my components were all rendered in my overarching Notes Container. This is illustrated below in the render function of my Notes Container:

```return (
  <div className="notes-container">
    { newNotebook }
    { newTag }
    { notebookIndex }
    { tagIndex }
    <section className="overlay hidden"></section>
    <section className={ panelClassName }>
      <SidebarContainer />
      <section className="notes-header-and-index">
        { this.header }
        <NotesIndexContainer />
      </section>
    </section>
    <section className={ contentClassName }>
      { noteDetail }
    </section>
    <figure className="expand hidden" onClick={ this.togglePanel }>
    </figure>
    <figure className="collapse hidden" onClick={ this.togglePanel }>
    </figure>
  </div>
);```

This resulted in a single-page app with multiple modals and sliding components, pictured below:

![CleverNote Home Page For A Logged In User]()

Notes are rendered in the Notes Index Container on the left-hand side of the home page, as well as in the Note Detail Container that spans the right-hand side of the page when a specific note is selected. Notes are allowed to be deleted in two different places: the notes index when a specific note is hovered on and at the top of the Note Detail Container. A note's created at and updated at date and time can also be viewed by clicking on the information icon at the top of the Note Detail Container.

### Notebooks

Each note must live within a single Notebook in CleverNote. 

### Tags

## Future Directions for the Project

In addition to the features already implemented in CleverNote, outlined below are the following steps I plan to take as I continue working on this project:

### Search

I plan to implement search features for notes, notebooks, and tags. These search operations would allow the user to search through their note contents, notebook titles, and tag names in order to efficiently find what they are looking for and keep organized.

### Notes Sort By

Currently, a user's notes can only be shown in the order of when a note was last updated at. I plan to allow users the capability of sorting their notes by date created, date updated, and note title. With this filtering capability, users will given more control of how they prefer their notes to be organized and will greatly increase their user experience.

### Work Chat & Sharing Notes

I plan to implement a Work Chat with WebSockets so that users will be able to chat in real-time with co-workers, friends, and anyone using CleverNote. Furthermore, this Work Chat would allows users to share notes within it.

### Reminders

As a tool for organization, I plan to implement Reminders in CleverNote so that users may save reminders that will alert them at a specified time about a certain note and its contents. I believe this will further aid in a user's ability to utilize CleverNote as an organization tool for both their professional and personal lives.

### Shortcuts

Again, in order to aid a user's experience of CleverNote as an organization tool, shortcuts would increase the efficiency of a user searching for specific content. A user will have the ability to "bookmark" specific notes that they can access all at once with the click of an icon on the sidebar without the use of a search feature.

### Accessible Captions On Hover

In order to make CleverNote more accessible to all, I plan on implementing captions for all clickable elements when hovered on.
