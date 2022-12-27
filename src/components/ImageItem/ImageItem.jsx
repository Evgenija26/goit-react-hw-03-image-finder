import React, {Component} from "react";
import css from "./ImageItem.module.css";
import Modal from "components/Modal";

export default class ImageItem extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { largeImageUrl, image } = this.props;

    return (
        <>
        <li  className={css.ImageItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.toggleModal}
          className={css.ImageItem__image} />
        {showModal && <Modal modalUrl={largeImageUrl} onModalClick={this.toggleModal} />}
        </li>
      </>
    )
  }
}





