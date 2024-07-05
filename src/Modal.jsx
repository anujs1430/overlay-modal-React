import React from "react";

const Modal = ({ handleClose, handleAcceptOffer }) => {
  const handleOutSideClick = (e) => {
    if (e.target.className === "modal") {
      handleClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutSideClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>

        <div className="content">
          this is ths offer for you... Please click on the accept button!
        </div>

        <button className="accept-btn" onClick={handleAcceptOffer}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Modal;
