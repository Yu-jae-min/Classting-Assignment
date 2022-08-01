import ReactDom from 'react-dom';

import { IModalPortalType } from 'types/types';

const ModalPortal = ({ children }: IModalPortalType) => {
  const root = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, root);
};

export default ModalPortal;
