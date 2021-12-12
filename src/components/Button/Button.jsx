import { Component } from 'react';
import styles from './Button.module.css';

export default class LoadMoreBtn extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={() => {
          this.props.onLoadMore();
        }}
        type="button"
        className={styles.Button}
      >
        load more
      </button>
    );
  }
}
