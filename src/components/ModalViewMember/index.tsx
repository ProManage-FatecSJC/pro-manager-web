import { useEffect } from "react";

export function ModalViewMember({ isOpen, setModalOpen }: any) {

    useEffect(() => {
        function onEsc(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setModalOpen();
            }
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [setModalOpen]);
}