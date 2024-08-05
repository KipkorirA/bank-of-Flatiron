
const Sort = ({ sortOption, onSortChange }) => {
  return (
    <select className="sort-select" onChange={onSortChange} value={sortOption}>
      <option value="date">Sort by Date</option>
      <option value="category">Sort by Category</option>
      <option value="description">Sort by Description</option>
    </select>
  );
};

export default Sort;
