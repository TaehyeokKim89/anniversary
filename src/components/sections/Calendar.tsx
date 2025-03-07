import styles from './Calendar.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'
import { ko } from 'date-fns/locale'
import { format, parseISO } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { memo } from 'react'

const cx = classNames.bind(styles)

const css = `
  .rdp-nav {
    display: none
  }
  .rdp-day {
    cursor: default;
  }
`

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          modifiers={{ selected: weddingDate }}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default memo(Calendar) 