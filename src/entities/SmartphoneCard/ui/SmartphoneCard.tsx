import smartphone from '../../../assets/thumb_240588_default_big 3.svg'
import cl from './SmartphoneCard.module.scss'

export const SmartphoneCard = () => {
  return (
    <div className={cl.smartphoneCard}>
      <p>
        20 Pro 8/256Gb Phantom Blue
      </p>
      <img src={smartphone} alt="smartphone"/>
    </div>
  )
}
