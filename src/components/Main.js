import React, { useContext } from 'react'
import { noteContext } from '../App'
import '../App.css'
import { updateNote } from './type'

function Main() {
  const noteContexts = useContext(noteContext)
  const { noteState, noteDispatch } = noteContexts
  const { title, body } = noteState.activeNote
  function onEditField(field, value) {
    noteDispatch({
      type: updateNote,
      payload: {
        ...noteState.activeNote,
        [field]: value,
        dateModified: Date.now(),
      },
    })
  }

  if (!noteState.listOfNotes.length)
    return <div className="no-active-note">No Active Note</div>
  return (
    <div className="Main-menu">
      <div className="inputarea">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => onEditField('title', e.target.value)}
        />
        <textarea
          value={body}
          name="textarea"
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </div>
      <div className="preview"></div>
    </div>
  )
}

export default React.memo(Main)
