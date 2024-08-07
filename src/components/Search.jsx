
const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input className="search-input" type="text" placeholder="Search by description..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  )
}

export default Search;
