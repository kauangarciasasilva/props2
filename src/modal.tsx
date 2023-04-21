import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

interface Props {
    showModal: boolean;
    handleOpenClose: any;
    setOperation: any;
    calculate:any;
}

export default class ComponentButton extends React.Component<Props>{
    doAction(operation: String) {
        this.props.setOperation(operation);
        this.props.calculate(operation);
        this.props.handleOpenClose();
    }
    render() {
        const { showModal, handleOpenClose } = this.props
        return (
            <>


                <Modal show={showModal} onHide={handleOpenClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>Calculo</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.doAction('soma')}>Somar</Button>
                        <Button variant="primary" onClick={() => this.doAction('Subtraçao')}>Subtraçao </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


}

