import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import styles from './Shop.module.scss';

const ProductTable = ({ displayedProducts }) => {
  const sportingProducts = displayedProducts.filter(
    item => item.category === 'Sporting Goods'
  );
  const electronicProducts = displayedProducts.filter(
    item => item.category === 'Electronics'
  );

  return (
    <div className={styles.table}>
      <div className={styles.table__heading}>
        <p>Name</p>
        <p>Price</p>
      </div>

      <section>
        <ProductCategoryRow categoryName="Sporting Goods" />
        {sportingProducts.map(prod => (
          <ProductRow
            productName={prod.name}
            productPrice={prod.price}
            key={prod.name}
          />
        ))}
      </section>

      <section>
        <ProductCategoryRow categoryName="Electronics" />
        {electronicProducts.map(prod => (
          <ProductRow
            productName={prod.name}
            productPrice={prod.price}
            key={prod.name}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductTable;
