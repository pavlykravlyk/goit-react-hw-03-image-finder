// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import ImageGallery from '../components/ImageGallery';
// import Button from '../components/Button';
// import { ENV } from '../src/consts';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23902495-d255dd7217da8bb07f7abae59';

// export default class PixabayApiService extends Component {
// state = {
//   page: 1,
//   images: [],
//   error: null,
//   status: 'idle',
// };

// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.searchQuery !== this.props.searchQuery) {
//     this.setState({ status: 'pending', page: 1, images: [] });
//     this.fetchImages();
//   }

//   if (prevState.page !== this.state.page) {
//     this.fetchImages();
//   }
// }

// export async function fetchImages() {
//   const searchParams = new URLSearchParams({
//     image_type: 'photo',
//     orientation: 'horizontal',
//     q: this.props.searchQuery,
//     page: this.state.page,
//     per_page: 12,
//     key: API_KEY,
//   });

//   try {
//     const response = await fetch(`${BASE_URL}?${searchParams}`);
//     if (response.ok) {
//       const articles = await response.json();
//       this.setState(prevState => ({
//         images: [...prevState.images, ...articles.hits],
//         status: 'resolved',
//       }));
//     } else {
//       return Promise.reject(
//         new Error(`No matches found for ${this.props.searchQuery}`),
//       );
//     }
//   } catch (error) {
//     this.setState({ error, status: 'rejected' });
//     // toast.error('Input field must not be empty');
//   }
// }

// incrementPage = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };

//   render() {
//     // const { images, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Введіть щось</div>;
//     }

//     if (status === 'pending') {
//       return <div>Loading...</div>;
//     }

//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGallery images={images} />
//           <Button onLoadMore={this.incrementPage} />
//         </>
//       );
//     }
//   }
// }

// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import ImageGallery from '../components/ImageGallery';
// import Button from '../components/Button';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23902495-d255dd7217da8bb07f7abae59';

// export default class PixabayApiService extends Component {
//   state = {
//     page: 1,
//     images: [],
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchQuery !== this.props.searchQuery) {
//       this.setState({ status: 'pending', page: 1, images: [] });
//       this.fetchImages();
//     }

//     if (prevState.page !== this.state.page) {
//       this.fetchImages();
//     }
//   }

//   fetchImages = async () => {
//     const searchParams = new URLSearchParams({
//       image_type: 'photo',
//       orientation: 'horizontal',
//       q: this.props.searchQuery,
//       page: this.state.page,
//       per_page: 12,
//       key: API_KEY,
//     });

//     try {
//       const response = await fetch(`${BASE_URL}?${searchParams}`);
//       if (response.ok) {
//         const articles = await response.json();
//         this.setState(prevState => ({
//           images: [...prevState.images, ...articles.hits],
//           status: 'resolved',
//         }));
//       } else {
//         return Promise.reject(
//           new Error(`No matches found for ${this.props.searchQuery}`),
//         );
//       }
//     } catch (error) {
//       this.setState({ error, status: 'rejected' });
//       toast.error('Input field must not be empty');
//     }
//   };

//   incrementPage = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, error, status } = this.state;

//     if (status === 'idle') {
//       return <div>Введіть щось</div>;
//     }

//     if (status === 'pending') {
//       return <div>Loading...</div>;
//     }

//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGallery images={images} />
//           <Button onLoadMore={this.incrementPage} />
//         </>
//       );
//     }
//   }
// }
