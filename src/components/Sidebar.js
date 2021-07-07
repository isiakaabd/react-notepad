import React, { useContext } from 'react'
import { noteContext } from '../App'
import '../App.css'
import Notes from './Notes'
import { addNote } from './type'
import uuid from 'react-uuid'
import { useEffect } from 'react'
function Sidebar() {
  const noteContexts = useContext(noteContext)
  const { noteState, noteDispatch } = noteContexts
  const { listOfNotes } = noteState

  // saving the document
  useEffect(() => {
    localStorage.setItem('reactNotes', JSON.stringify(noteState))
  }, [listOfNotes])

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="note">
          <h4>note</h4>
        </div>
        <div className="header-button">
          <button
            type="button"
            onClick={() =>
              noteDispatch({
                type: addNote,
                payload: {
                  id: uuid(),
                  title: 'unTitiled document',
                  body: 'Abb' + Math.floor(Math.random() * 8),
                  dateModified: Date.now(),
                },
              })
            }
          >
            add
          </button>
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
