// import { Component } from 'react';
import styles from './Button.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button" className={styles.Button}>
      load more
    </button>
  );
};

export default LoadMoreBtn;
