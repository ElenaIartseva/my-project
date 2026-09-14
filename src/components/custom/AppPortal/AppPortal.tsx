import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type AppPortalProps = {
  children?: ReactNode
  targetContainer?: HTMLElement
};

const AppPortal = (props: AppPortalProps) => {
  const {
    children,
    targetContainer = document.body,
  } = props;

  return createPortal(children, targetContainer)
};

export default AppPortal;
