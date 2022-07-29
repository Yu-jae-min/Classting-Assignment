import ReactDom from 'react-dom';
import { IModalPortalType } from 'types/types';

const ModalPortal = ({ children }: IModalPortalType) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
