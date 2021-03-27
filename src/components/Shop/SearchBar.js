import styles from './Shop.module.scss';

const SearchBar = ({
  searchQuery,
  handleSearchQueryChange,
  handleInStockProductsExclusion,
  showOnlyProductsInStore
}) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search..."
        className={styles.search__box}
      />
      <label>
        <input
          type="checkbox"
          onClick={handleInStockProductsExclusion}
          defaultChecked={showOnlyProductsInStore}
        />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
