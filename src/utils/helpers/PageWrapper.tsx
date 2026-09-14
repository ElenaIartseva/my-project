import { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

type PageWrapperProps = {
  children?: ReactNode
};

function PageWrapper(props: PageWrapperProps) {
  return (
    <div className={styles.PageWrapper}>
      {props.children}
    </div>
  );
}

export default PageWrapper;
