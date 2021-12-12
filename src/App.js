import styles from './App.module.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
// import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
// import { ENV } from '../src/consts';
import PixabayApiService from './services/pixabay-api';
// import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  componentDidMount() {
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSearchbarFormSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className={styles.App}>
        <Container>
          <Searchbar onSubmit={this.handleSearchbarFormSubmit} />
          <PixabayApiService searchQuery={this.state.searchQuery} />
          {/* <button type="button" onClick={this.toggleModal}>
            Open Modal
            </button> */}

          {/* {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              <img src="" alt="" />
            </Modal>
          )} */}

          <ToastContainer autoClose={3000} />
        </Container>
      </div>
    );
  }
}
