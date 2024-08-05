
const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input type="text" placeholder="Search by description..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  );
};

export default Search;
