import React, { useState } from "react";
import "./Modal.css";

import close_icon from "../assets/close.svg"

export default function Modal({modal, setModal, id, children, title, children1}) {
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
            {children}
        </button>
        <div className="title" id={id}>
            {title}
        </div>
        {modal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              {children1}
              <button className="close-modal" onClick={toggleModal}>
                <img src={close_icon}/>
              </button>
            </div>
          </div>
        )}
      </>
    );
  }