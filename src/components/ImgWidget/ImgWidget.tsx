import './slide.css'

interface Props {
  classNameInput?: string
  classNameImg?: string
  ImgSrc?: string
}

export default function ImgWidget({ classNameInput = '', classNameImg = '', ImgSrc = '' }: Props) {
  return (
    <div className={classNameInput + ' bordercss'}>
      <img className={classNameImg + ' bordercss'} src={ImgSrc} alt='.' />
    </div>
  )
}
