import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Title from './components/Title'
import {
  addNote,
  editNote,
  deleteNote,
  updateNote,
  getActiveNote,
} from './components/type'

export const noteContext = React.createContext()
const { Provider } = noteContext

const reducer = (state, action) => {
  switch (action.type) {
    case addNote:
      return {
        ...state,

        activeNote: action.payload,
        listOfNotes: [action.payload, ...state.listOfNotes],
      }

    case editNote:
      return { ...state, activeNote: action.payload }

    case deleteNote:
      return {
        ...state,
        listOfNotes: state.listOfNotes.filter(({ id }) => {
          return id !== action.payload
        }),
        activeNote: false,
      }

    case updateNote:
      return {
        ...state,

        activeNote: action.payload,
        listOfNotes: state.listOfNotes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload
          }
          return note
        }),
      }

    case getActiveNote:
      return {
        ...state,
        typingEffect: action.payload,
      }
    default:
      return state
  }
}
function App() {
  // getting notes from local storage
  const initialstate = localStorage.reactNotes
    ? JSON.parse(localStorage.reactNotes)
    : {
        listOfNotes: [],
        activeNote: false,
        typingEffect: false,
      }

  const [state, dispatch] = useReducer(reducer, initialstate)

  // saving to local storage

  useEffect(() => {
    localStorage.setItem('reactNotes', JSON.stringify(state))
  }, [state])

  return (
    <Provider value={{ noteState: state, noteDispatch: dispatch }}>
      <Title />
      <div className="d-flex container-fluid App p-0">
        <Sidebar className="col-3 col-md-2 " />
        <Main className="col-9 col-md-6" />
      </div>
    </Provider>
  )
}

export default App
