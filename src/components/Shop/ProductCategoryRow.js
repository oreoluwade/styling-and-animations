import React from 'react';
import styles from './Shop.module.scss';

const ProductCategoryRow = ({ categoryName }) => {
  return <div className={styles.category}>{categoryName}</div>;
};

export default ProductCategoryRow;
