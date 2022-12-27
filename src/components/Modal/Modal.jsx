import React, { Component } from "react";
import {createPortal} from 'react-dom'
// import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    largeImageUrl: '',
  }
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
    const { largeImageUrl, tags } = this.props;
    
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">
          <img src={largeImageUrl} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
