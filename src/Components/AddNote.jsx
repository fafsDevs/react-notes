import { useState } from "react"

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Escribe una nueva nota"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} caracteres</small>
        <button className="save" onClick={handleSaveClick}>save</button>
      </div>
    </div>
  )
}

export default AddNote