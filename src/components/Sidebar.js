import React, { useContext } from 'react'
import { noteContext } from '../App'
import '../App.css'
import Notes from './Notes'
import { addNote } from './type'
import uuid from 'react-uuid'

function Sidebar() {
  const noteContexts = useContext(noteContext)
  const { noteState, noteDispatch } = noteContexts
  const { listOfNotes } = noteState

  return (
    <div className="col-4 col-md-5 p-1 sidebar-container">
      <div
        className="sidebar-header"
        onClick={() =>
          noteDispatch({
            type: addNote,
            payload: {
              id: uuid(),
              title: 'Untitled Note',
              body: '',
              dateModified: Date.now(),
            },
          })
        }
      >
        <div>
          <i className="fas fa-plus fa-2x" />
        </div>
      </div>
      <div className="sidebar-body">
        {listOfNotes.map((noteItems) => {
          return <Notes key={noteItems.id} notes={noteItems} />
        })}
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
