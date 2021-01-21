import React from 'react'
import '@/components/Modal/Modal.css'
import {useDispatch, useSelector} from "react-redux";
import {closeModal, openModal} from "@/redux/action";

export default () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.modal.isOpen)

    return (
        //fragment нужен для того чтобы не оборачивать все в лишний dom-объект
        <React.Fragment>
            <button className='btn btn-primary' onClick={() => dispatch(openModal())}>
                Open modal
            </button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close"
                                        aria-label="Close" onClick={() => dispatch(closeModal())}></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        onClick={() => dispatch(closeModal())}>Close
                                </button>
                                <button type="button" className="btn btn-primary">Out of service</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </React.Fragment>
    )
}