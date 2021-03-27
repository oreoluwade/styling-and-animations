import { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import styles from './Shop.module.scss';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const FilterableProductTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyProductsInStore, setShowOnlyProductsInStore] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const productList = PRODUCTS.filter(prod =>
      prod.name.toLowerCase().includes(searchQuery)
    );
    setDisplayedProducts(productList);

    if (showOnlyProductsInStore) {
      const newProductsList = productList.filter(prod => prod.stocked);
      setDisplayedProducts(newProductsList);
    }
  }, [searchQuery, showOnlyProductsInStore]);

  const handleSearchQueryChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  const handleInStockProductsExclusion = e => {
    setShowOnlyProductsInStore(!showOnlyProductsInStore);
  };

  return (
    <div className={styles.root}>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
        handleInStockProductsExclusion={handleInStockProductsExclusion}
        showOnlyProductsInStore={showOnlyProductsInStore}
      />

      <ProductTable displayedProducts={displayedProducts} />
    </div>
  );
};

export default FilterableProductTable;
