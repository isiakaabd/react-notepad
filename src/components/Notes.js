import React, { useContext } from 'react'
import { deleteNote, editNote } from './type'
import { noteContext } from '../App'

function Notes(props) {
  const noteContexts = useContext(noteContext)
  const { noteDispatch } = noteContexts
  const { id, title, body, dateModified } = props.notes

  //  useEffect(editButton, [input])
  // useEffect(() => {
  //   noteDispatch({
  //     type: getActiveNote,
  //     payload: id,
  //   })
  // }, [noteState])

  const handleEdit = () => {
    noteDispatch({
      type: editNote,
      payload: props.notes,
    })
  }
  //  , [])
  return (
    <div className="note-items" onClick={handleEdit}>
      <div className="left-items-content">
        <h6>{title}</h6>
        <p>{body && body.substring(0, 100)} </p>
        <small>{dateModified}</small>
      </div>
      <div className="right-items-content">
        <button
          onClick={() =>
            noteDispatch({
              type: deleteNote,
              payload: id,
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default React.memo(Notes)
