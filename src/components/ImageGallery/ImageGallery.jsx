import { Component } from 'react';
import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    );
  }
}
