import styles from './ImageGallery.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'
import ImageViewer from 'components/imageViewer/Index'
import { useState } from 'react'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => {
            return (
              <li
                key={idx}
                className={cx('wrap-image')}
                onClick={() => {
                  handleSelectedImage(idx)
                }}
              >
                <img src={src} alt="사진첩 이미지" />
              </li>
            )
          })}
        </ul>
      </Section>
      <ImageViewer images={images} open={open} selectedIdx={selectedIdx} onClose={handleClose}/>
    </>
  )
}

export default ImageGallery
111
