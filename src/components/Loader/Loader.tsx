import cn from 'classnames';
import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string
};

function Loader(props: LoaderProps) {
  return (
    <div className={cn(styles.Loader, {}, [props.className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader;
