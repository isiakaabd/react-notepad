import React, { useContext } from 'react'
import { noteContext } from '../App'

function Title() {
  const noteContexts = useContext(noteContext)
  const { noteState } = noteContexts
  const { typingEffect } = noteState
  return (
    <div
      className=" container
    d-flex justify-content-space-around mt-2 align-items-center"
    >
      <div style={{ marginRight: 'auto' }}>
        <h5 className="text-center" style={Style}>
          NOTES
        </h5>
      </div>
      <div style={{ background: '#ffd43b' }}>
        <small
          style={{
            color: 'black',
            fontSize: '1.2rem',
            fontWeight: '400',
            textAlign: ' center',
          }}
        >
          {typingEffect ? 'saving..' : ''}
        </small>
      </div>
    </div>
  )
}

const Style = {
  fontSize: '1.8rem',
  fontWeight: '500',
  color: 'black',
  marginBottom: 0,
}
export default React.memo(Title)
