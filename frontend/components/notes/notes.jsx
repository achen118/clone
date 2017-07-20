import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteDetailContainer from '../notes/note_detail_container';
// import { Motion, spring, presets } from 'react-motion';
// import { Div, Button } from 'glamorous';

// const panelStyle = {
//   position: 'absolute',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   width: 320,
//   background: '#45B0F9'
// };

class Notes extends React.Component {

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.noteId;
    if (this.props.match.params.noteId !== nextId) {
      this.props.fetchSingleNote(nextId);
    }
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   panelOpen: true
    // };
  }

  render() {
    const { notes, note } = this.props;
    let noteDetail;
    if (note) {
      noteDetail = <NoteDetailContainer note={ note } />;
    } else {
      noteDetail = <NoteDetailContainer note={ notes.byId[notes.allIds[0]] } />;
    }
    // const { panelOpen } = this.state;
    return (
      <div className="notes-container">

            <SidebarContainer />
            <section className="notes-header-and-index">
              <NotesHeader noteCount={ notes.allIds.length } />
              <NotesIndexContainer />
            </section>

        { noteDetail }
      </div>
    );
  }

}

export default Notes;

// <Motion
//   style={{
//     x: spring(panelOpen ? 0 : -100),
//     opacity: spring(panelOpen ? 1 : 0)
//   }}
// > {(currentStyles) => (
//     <Div
//       css={{
//         transform: `translate3d(${currentStyles.x}%, 0, 0)`,
//         opacity: currentStyles.opacity
//       }}
//     >

// </Div>
//   )}
// </Motion>










// const { Component, createElement, DOM } = React;
// const { Motion, spring, presets } = ReactMotion;
// const { Div, Button } = glamorous;
//
// const buttonStyle = {
//   backgroundColor: 'transparent',
//   color: 'white',
//   border: '1px solid white',
//   borderRadius: 4,
//   height: 40,
//   lineHeight: 2.5,
//   paddingLeft: 16,
//   paddingRight: 16,
//   outline: 'none',
//   cursor: 'pointer'
// }
//
// const appStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   width: '100vw',
//   background: '#55DFBD'
// }
//
// const panelStyle = {
//   position: 'absolute',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   width: 320,
//   background: '#45B0F9'
// }
//
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       panelOpen: false
//     }
//   }

//   render () {
//     const { panelOpen } = this.state
//
//     return (
//       <Div css={appStyle}>
//         <Button
//           css={buttonStyle}
//           onClick={() => this.setState({ panelOpen: !panelOpen })}
//         >
//           Toggle Panel
//         </Button>
//         <Motion
//           style={{
//             x: spring(panelOpen ? 0 : -100),
//             opacity: spring(panelOpen ? 1 : 0)
//           }}
//         >{(currentStyles) => (
//           <Div
//             css={{
//               ...panelStyle,
//               transform: `translate3d(${currentStyles.x}%, 0, 0)`,
//               opacity: currentStyles.opacity
//             }}
//           >
//           </Div>
//         )}
//         </Motion>
//       </Div>
//     )
//   }
// }
//
// ReactDOM.render(createElement(App), document.getElementById('app'))
