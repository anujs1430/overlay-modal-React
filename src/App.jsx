import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  const [isAccept, setIsAccept] = useState(false);

  const handleShowModal = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const handleAcceptOffer = () => {
    setIsAccept(true);
    setIsShow(false);
  };

  return (
    <div className="show-offer">
      {!isAccept && (
        <button className="offer-btn" onClick={handleShowModal}>
          Show Offer
        </button>
      )}
      {isAccept && <div>Offer Accepted...!</div>}

      {isShow && (
        <Modal
          handleClose={handleClose}
          handleAcceptOffer={handleAcceptOffer}
        />
      )}
    </div>
  );
};

export default App;
