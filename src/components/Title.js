import React, { useContext } from 'react'
import { noteContext } from '../App'

function Title() {
  const noteContexts = useContext(noteContext)
  const { noteState } = noteContexts
  const { typingEffect } = noteState
  return (
    <div className=" container d-flex justify-content-center mt-2 align-items-center">
      <h5 className="text-center" style={Style}>
        NOTES
      </h5>
      <small style={{ p }}>{typingEffect ? 'saving..' : ''}</small>
    </div>
  )
}

export default React.memo(Title)

const Style = {
  fontSize: '1.8rem',
  fontWeight: '500',
  color: 'black',
}
const p = {
  marginRight: '30px',
}
