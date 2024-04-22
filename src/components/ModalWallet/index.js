import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setModalWallet } from "../../redux/modalSlice";

import { Button, Modal} from 'react-bootstrap';

const ModalWallet = () => {
  const dispatch = useDispatch();

  const show = useSelector(state => state.modal.modalWallet);
  
  const handleClose = () => dispatch(setModalWallet(false));

    return (
      <>  
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Adicionar Carteira</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light bg-white" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalWallet;