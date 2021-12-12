import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    event.code === 'Escape' && this.props.onClose();
  };

  handleOverlayClick = event => {
    event.currentTarget === event.target && this.props.onClose();
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
          {this.props.children}
          {/* <img src="" alt="" /> */}
        </div>
      </div>,
      document.querySelector('#modal-root'),
    );
  }
}