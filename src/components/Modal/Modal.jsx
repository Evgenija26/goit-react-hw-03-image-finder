import React from "react";
import css from './Modal.module.css'

import Modal from 'react-modal';

// const modalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, img, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={css.Modal}>
      <button onClick={onClose}>Close</button>
      <div>Image modal</div>
      <img src={img} alt="" />
    </Modal>
  );
};