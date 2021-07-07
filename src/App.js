import React, { useReducer } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import {
  addNote,
  editNote,
  deleteNote,
  updateNote,
  getActiveNote,
} from './components/type'

export const noteContext = React.createContext()
const { Provider } = noteContext

// getting notes from local storage
const initialstate = localStorage.reactNotes
  ? JSON.parse(localStorage.reactNotes)
  : {
      listOfNotes: [],
      activeNote: false,
    }

function reducer(state, action) {
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
        listOfNotes: state.listOfNotes.filter((note) => {
          return note.id !== action.payload
        }),
      }

    case updateNote:
      return {
        ...state,
        listOfNotes: state.listOfNotes.map((note) => {
          if (note.id === action.payload.id) {
            return (state.activeNote = action.payload)
          }
          return note
        }),
      }

    case getActiveNote:
      return {
        ...state,
        activeNote: state.listOfNotes.find((i) => i.id === state.activeNote.id),
      }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate)

  return (
    <Provider value={{ noteState: state, noteDispatch: dispatch }}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </Provider>
  )
}

export default App
