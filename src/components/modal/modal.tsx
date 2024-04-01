import { ReactNode, useEffect, FC } from "react";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import { ModalWrapper } from "./modal-wrapper/modal-wrapper";

const modalRoot = document.getElementById("modalRoot");

export type TModal = {
    onClose : () => void,
    title? : string,
    children? : ReactNode,
};

export const Modal:FC<TModal> = (props) => {
    useEffect(() => {
        function closeByEsc(e : KeyboardEvent) {if(e.key === 'Escape') props.onClose()}
        document.addEventListener('keydown', closeByEsc);
        return () => {document.removeEventListener('keydown', closeByEsc)}
    }, [props]);

    const element = (
        <>
            <ModalOverlay onClick={props.onClose} />
            <ModalWrapper title={props.title} onClose={props.onClose} children={props.children}/>
        </>
        );

    return ReactDOM.createPortal (
        element,
        modalRoot!
    )
}
