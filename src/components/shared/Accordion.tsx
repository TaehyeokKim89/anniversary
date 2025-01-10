import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}

const Accordion = ({ label, children }: PropsWithChildren<AccordionProps>) => {
  const [ expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prev)=> !prev)
  }

  return (
    <div className={cx(['wrap-accordion', expanded? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

const IconArrowDown = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      enable-background="new 0 0 50 50"
      viewBox="0 0 50 50"
    >
      <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
    </svg>
  )
}

export default Accordion
