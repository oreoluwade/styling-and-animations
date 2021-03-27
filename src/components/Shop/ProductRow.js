import React from 'react';
import styles from './Shop.module.scss';

const ProductRow = ({ productName, productPrice }) => {
  return (
    <div className={styles.product_row}>
      <p>{productName}</p>
      <p>{productPrice}</p>
    </div>
  );
};

export default ProductRow;
