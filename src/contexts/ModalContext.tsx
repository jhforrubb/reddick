import { createContext, useState } from 'react';

export interface ModalContextInterface {
    isModalOpen: boolean;
    toggleModal: () => void;
}

export interface ModalContextProps {
    children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextInterface);

const ModalContextProvider = (props: ModalContextProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(true);
    };

    return <ModalContext.Provider value={{ isModalOpen, toggleModal }}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider;
