import React, { useContext } from 'react'
import { noteContext } from '../App'
import '../App.css'
import { getActiveNote, updateNote } from './type'
import ReactMarkdown from 'react-markdown'

function Main() {
  const noteContexts = useContext(noteContext)
  const { noteState, noteDispatch } = noteContexts
  const { title, body } = noteState.activeNote

  const onEditField = (field, value) => {
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
    <div className=" Main-menu d-flex flex-column">
      <div className="inputarea">
        <section>
          <input
            onKeyDown={() =>
              noteDispatch({
                type: getActiveNote,
                payload: true,
              })
            }
            // onTouchStart={noteDispatch({
            //   type: getActiveNote,
            //   payload: true,
            // })}
            // onTouchEnd={() =>
            //   noteDispatch({
            //     type: getActiveNote,
            //     payload: false,
            //   })
            // }
            onKeyUp={() =>
              noteDispatch({
                type: getActiveNote,
                payload: false,
              })
            }
            autoCorrect="true"
            autoFocus
            type="text"
            name="title"
            value={title}
            placeholder="Note Title"
            onChange={(e) => onEditField('title', e.target.value)}
          />
        </section>
        <section>
          <textarea
            onKeyDown={() =>
              noteDispatch({
                type: getActiveNote,
                payload: true,
              })
            }
            // onTouchEnd={() =>
            //   noteDispatch({
            //     type: getActiveNote,
            //     payload: false,
            //   })
            // }
            onKeyUp={() =>
              noteDispatch({
                type: getActiveNote,
                payload: false,
              })
            }
            // onTouchStart={noteDispatch({
            //   type: getActiveNote,
            //   payload: true,
            // })}
            rows="10"
            value={body}
            autoComplete="true"
            autoCapitalize="true"
            name="textarea"
            placeholder="Write your note here..."
            onChange={(e) => onEditField('body', e.target.value)}
          />
        </section>
      </div>
      <hr style={{ marginTop: '20px' }} />
      <div className="preview">
        <h2>{title}</h2>
        <div className="preview-body">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Main)
