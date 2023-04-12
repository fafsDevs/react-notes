import { MdSearch } from "react-icons/md"

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className='search-icons' size='1.3em' />
      <input onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Busca tus notas" />
    </div>
  )
}

export default Search