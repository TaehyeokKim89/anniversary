import styles from './Share.module.scss'
import classNames from 'classnames/bind'
import Section from 'components/shared/Section'
import { useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import CopyToClipboard from 'react-copy-to-clipboard'

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const cx = classNames.bind(styles)

const Share = ({ groomName, brideName, date }: ShareProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName}`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', { locale: ko })}`,
        imageUrl:
          'https://image/jpeg;base64,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',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>카카오톡</button>
        <CopyToClipboard text={window.location.origin} onCopy={()=>{
          window.alert('복사가 완료되었습니다.')
        }}>
          <button>링크</button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

export default Share
