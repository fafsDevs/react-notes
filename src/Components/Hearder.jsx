function Header({ handleToogleDarkMode }) {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button onClick={() => handleToogleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save">Cambiar Modo</button>
    </div>
  )
}

export default Header