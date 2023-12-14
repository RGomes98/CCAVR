import type { Dispatch, RefObject, SetStateAction } from 'react';
import { useEffect } from 'react';

export const useModal = (
  modalRef: RefObject<HTMLDialogElement>,
  isModalStateOpen: boolean,
  setIsModalStateOpen: (() => void) | Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const dialog = modalRef.current;
    const handleClose = () => setIsModalStateOpen(false);
    isModalStateOpen ? dialog?.showModal() : dialog?.close();

    dialog?.addEventListener('close', handleClose);
    return () => dialog?.removeEventListener('close', handleClose);
  }, [modalRef, isModalStateOpen, setIsModalStateOpen]);

  return { modalRef };
};
