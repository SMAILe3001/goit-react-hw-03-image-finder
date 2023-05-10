import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import CSS from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hedelBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { Overlay, Modal } = CSS;

    return createPortal(
      <div className={Overlay} onClick={this.hedelBackdropClick}>
        <div className={Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propType = {
  children: PropTypes.object,
};