import React, { useContext } from 'react'
import { deleteNote, editNote } from './type'
import { noteContext } from '../App'
//import AddOutlinedIcon from '@material-ui/icons/AddOutlined'

function Notes(props) {
  const noteContexts = useContext(noteContext)
  const { noteDispatch, noteState } = noteContexts
  const { id, title, body, dateModified } = props.notes
  const handleEdit = () => {
    noteDispatch({
      type: editNote,
      payload: props.notes,
    })
  }

  return (
    <div
      onClick={handleEdit}
      className={`note-items  ${id === noteState.activeNote.id && 'active'}`}
    >
      {/* <AddOutlinedIcon /> */}
      <div className="left-items-content">
        <h6>{title}</h6>
        <hr />
        <p>{body && body.substring(0, 20)} </p>
        <small>
          {new Date(dateModified).toLocaleDateString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </small>
      </div>
      <div className="right-items-content">
        <i
          type="button"
          className="fas fa-times"
          onClick={() =>
            noteDispatch({
              type: deleteNote,
              payload: id,
            })
          }
        ></i>
      </div>
    </div>
  )
}
export default React.memo(Notes)
