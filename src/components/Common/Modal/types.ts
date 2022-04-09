import React from 'react';

export interface ModalProps {
    showModal: boolean;
    setShowModal: (bol: boolean) => void;
    children: React.ReactNode;
    title?: string;
}
