import styles from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'
import Text from './Text';

const cx = classNames.bind(styles)

const Invitation = ({message} : {message: string}) => {
  return (
    <Section className={cx('container')}>
      <Text>{message}</Text>
    </Section>
  );
};

export default Invitation;