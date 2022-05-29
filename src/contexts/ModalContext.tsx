import { createContext, useState } from 'react';
import LoginModal from '../features/Modal/LoginModal';

export enum ModalType {
    CLOSED = 'closed',
    LOGIN = 'login',
    SIGN_IN = 'sign_in',
}

export interface ModalContextProps {
    children: React.ReactNode;
}

export interface ModalContextInterface {
    currentModal: ModalType;
    setCurrentModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

export const ModalContext = createContext({} as ModalContextInterface);

export const ModalContextProvider = (props: ModalContextProps) => {
    const [currentModal, setCurrentModal] = useState<ModalType>(ModalType.CLOSED);

    return (
        <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
            {props.children}
            <LoginModal isOpen={currentModal === ModalType.LOGIN} />
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
