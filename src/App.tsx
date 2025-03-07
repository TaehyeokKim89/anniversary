import classNames from 'classnames/bind'
import AttendCountModal from 'components/AttendCountModal/Index'
import Calendar from 'components/sections/Calendar'
import Contact from 'components/sections/Contact'
import Heading from 'components/sections/Heading'
import ImageGallery from 'components/sections/ImageGallery'
import Intro from 'components/sections/Intro'
import Invitation from 'components/sections/Invitation'
import Map from 'components/sections/Map'
import Share from 'components/sections/Share'
import Video from 'components/sections/Video'
import useWedding from 'hooks/useWedding'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const { wedding, error } = useWedding()


  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
