import React, { Fragment, useState } from 'react'
import "./styles.css";

const MyModal = ({Component, setOpen, onClose, dismissable=true, host=false}) => {
  function closeModal() {
    onClose()
  }
  return (
    <>
    <div>
        {setOpen && (
            <div className='modal' onClick={dismissable ? closeModal : null}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        {Component}
                    </div>
                    {
                        host ? <div className='modal-footer'>
                        <button onClick={closeModal}>START GAME!!!</button>
                    </div>
                    :
                    dismissable && <div className='modal-footer'>
                        <button onClick={closeModal}>Close</button>
                    </div>
                    }
                </div>
            </div>
        )}
    </div>
    </>
  )
}
export default MyModal;
