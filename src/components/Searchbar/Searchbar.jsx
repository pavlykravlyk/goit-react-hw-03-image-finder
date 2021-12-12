import { Component } from 'react';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default class Searchbar extends Component {
  state = { searchQuery: '' };

  handleSearchQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() !== '') {
      this.props.onSubmit(this.state.searchQuery);
      this.setState({ searchQuery: '' });
    } else toast.error('Input field must not be empty');
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__button_label}>Search</span>
            <AiOutlineSearch />
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
          />
        </form>
      </header>
    );
  }
}
