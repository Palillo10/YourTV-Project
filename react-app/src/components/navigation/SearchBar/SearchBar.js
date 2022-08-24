import { useHistory } from "react-router-dom"
import { useState } from "react"
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')


  const submitSearch = e => {
    e.preventDefault()
    if (searchTerm === '') {
      history.push(`/`)
    } else history.push(`/results¿search_query='${searchTerm}'`)
    // setSearchTerm('')
  }
  return (
    <form className="SearchBarForm" onSubmit={submitSearch}>
      <input className="SearchBarInput"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className="SearchBarButton">
        <SearchIcon sx={{ fontSize: "25px" }} color="action" />
      </button>
    </form>)
}


export default SearchBar
