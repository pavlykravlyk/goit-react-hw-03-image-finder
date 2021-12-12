import { Component } from 'react';
import { toast } from 'react-toastify';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23902495-d255dd7217da8bb07f7abae59';

export default class PixabayApiService extends Component {
  static defaultProps = {
    perPage: 12,
    page: 1,
  };

  state = {
    page: this.props.page,
    images: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      // console.log('searchQuery new....');
      this.toggleLoading();
      // this.setState({ loading: true });
      this.fetchImages();
    }
  }

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  async fetchImages() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.props.searchQuery,
      page: this.props.page,
      per_page: this.props.perPage,
      key: API_KEY,
    });

    try {
      const response = await fetch(`${BASE_URL}?${searchParams}`);
      const articles = await response.json();
      this.setState({ images: articles.hits });
    } catch (error) {
      this.setState({ error });
      // console.log(error);
    }

    this.toggleLoading();
    this.incrementPage();
  }

  incrementPage() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  resetPage() {
    this.setState({ page: 1 });
  }

  //   get query() {
  //     return this.state.searchQuery;
  //   }
  //   set query(newQuery) {
  //     this.setState({ searchQuery: newQuery });
  //   }

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        {loading && <div>Loading...</div>}

        {images && <ImageGallery images={images} />}
        {images && <Button onLoadMore={this.fetchImages} />}
      </div>
    );
  }
}
