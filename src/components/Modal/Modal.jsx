import React, { Component } from "react";
import {createPortal} from 'react-dom'
// import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
       this.props.onClose();
    }
  }
  

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">
          <img src={largeImage} alt={type} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

// Modal.setAppElement('#root');

// export const ImageModal = ({ isOpen, img, onClose }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} style={css.Modal}>
//       <button onClick={onClose}>Close</button>
//       <div>Image modal</div>
//       <img src={img} alt="" />
//     </Modal>
//   );
// };