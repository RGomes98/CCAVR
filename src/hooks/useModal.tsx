import { RefObject, useEffect } from 'react';

export const useModal = (modalRef: RefObject<HTMLDialogElement>, isModalStateOpen: boolean) => {
  const handleCancel = (e: Event) => e.preventDefault();

  useEffect(() => {
    const ref = modalRef;
    ref.current?.removeAttribute('open');
    ref.current?.addEventListener('cancel', handleCancel);
    isModalStateOpen ? ref.current?.showModal() : ref.current?.close();
    return () => ref.current?.removeEventListener('cancel', handleCancel);
  }, [modalRef, isModalStateOpen]);

  return { modalRef };
};
