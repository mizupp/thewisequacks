// import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

import "./styles.css";

const MyModal = ({Component, ButtonText}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
    <div>
        <button
          type="button"
          onClick={() => openModal()}>
          {ButtonText}
        </button>
        {isOpen && (
            <div className='modal' onClick={closeModal}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        {Component}
                    </div>
                    <div className='modal-footer'>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
  )
}

export default MyModal;
