import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface SuccessModalProps {
    show: boolean;
    handleClose: () => void;
}

export default function SuccessModal({ show, handleClose }: SuccessModalProps) {
    return (
        <Modal show={show} onHide={handleClose} centered className="border-3">
            <Modal.Body className="text-center py-4">
                <h4 className="mb-2">Thanks!</h4>
                <p className="mb-0">Your submission has been added successfully.</p>
            </Modal.Body>
            <Modal.Footer className="border-top-0">
                <Button variant="primary" className="w-100" onClick={handleClose}>
                    Yay
                </Button>
            </Modal.Footer>
        </Modal>
    );
}