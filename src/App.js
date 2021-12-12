import styles from './App.module.css';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
// import PixabayApiService from './services/pixabay-api';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23902495-d255dd7217da8bb07f7abae59';

export default class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    page: 1,
    images: [],
    error: null,
    status: 'idle',
    currentImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: 'pending', page: 1, images: [] });
      this.fetchImages();
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.state.searchQuery,
      page: this.state.page,
      per_page: 12,
      key: API_KEY,
    });

    try {
      const response = await fetch(`${BASE_URL}?${searchParams}`);
      if (response.ok) {
        const articles = await response.json();
        this.setState(prevState => ({
          images: [...prevState.images, ...articles.hits],
          status: 'resolved',
        }));
      } else {
        return Promise.reject(
          new Error(`No matches found for ${this.props.searchQuery}`),
        );
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
      toast.error('Input field must not be empty');
    }
  };

  toggleModal = event => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      currentImage: event,
    }));
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchbarFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { images, error, status, currentImage } = this.state;

    return (
      <div className={styles.App}>
        <Container>
          <Searchbar onSubmit={this.handleSearchbarFormSubmit} />

          {status === 'idle' && <div>Введіть щось</div>}

          {status === 'pending' && <div>Loading...</div>}

          {status === 'rejected' && <h1>{error.message}</h1>}

          {status === 'resolved' && (
            <ImageGallery images={images} onOpenModal={this.toggleModal} />
          )}
          {this.state.images.length > 0 ? (
            <Button onLoadMore={this.incrementPage} />
          ) : null}
          {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={currentImage.largeImageURL} alt={currentImage.tags} />
            </Modal>
          )}

          <ToastContainer autoClose={3000} />
        </Container>
      </div>
    );
  }
}
