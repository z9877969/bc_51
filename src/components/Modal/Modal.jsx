import { Component } from "react";
import s from "./Modal.module.scss";

// = ({ closeModal }) =>
class Modal extends Component {
  handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    this.props.closeModal();
  };

  handleCloseByEsc = (e) => {
    if (e.code !== "Escape") return;
    console.log("Modal listener");
    this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEsc);
  }

  render() {
    const { url, title } = this.props.modalData;
    return (
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>
    );
  }
}

export default Modal;
