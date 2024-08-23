import { Card } from '../model/types'
import cl from './WorkProcessCard.module.scss'

interface WorkProcessCardProps {
    card: Card
}

export const WorkProcessCard = ({ card }: WorkProcessCardProps) => {
    return (
        <div className={cl.card}>
            <div className={cl.cardNumberWrapper}>
                <p>0{card.id}</p>
            </div>
            <img src={card.img} alt="card" />
            <div className={cl.text}>
                <p>{card.text}</p>
            </div>
        </div>
    )
}
