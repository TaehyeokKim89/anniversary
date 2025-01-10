import styles from './Dimmed.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'

const cx = classNames.bind(styles)

const Dimmed = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={cx('dimmed')}>
      {children}
    </div>
  );
};

export default Dimmed;