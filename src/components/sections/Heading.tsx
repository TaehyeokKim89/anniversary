import styles from './Heading.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

const DAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
