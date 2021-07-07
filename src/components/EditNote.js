import React, { useContext } from 'react'

function EditNote(props) {
  const noteContexts = useContext(noteContext)
  const { noteState, noteDispatch } = noteContexts
  const { listOfNotes } = noteState
  const { id, title, body, dateModified } = noteState
  console.log(2222)
  return (
    <>
      <div className="Main-menu">
        <div className="inputarea">
          <input type="text" name="title" value={title} onChange={onchange} />
          <textarea value={body} onChange={onchange} />
        </div>
        <div className="preview"></div>
      </div>
    </>
  )
}

export default React.memo(EditNote)
