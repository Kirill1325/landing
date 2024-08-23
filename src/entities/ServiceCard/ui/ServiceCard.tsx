import { useAppDispatch } from '../../../app/store'
import { toggleServiceModal } from '../../../widgets/Modal/model/modalSlice'
import cl from './ServiceCard.module.scss'

export const ServiceCard = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.serviceCard} onClick={() => dispatch(toggleServiceModal())}>
            <p>Замена light сенсора на телефоне</p>
            <div className={cl.price}>
                <p>1-3 дня</p>
                <p>1 000 - 3 000 р</p>
            </div>
        </div>
    )
}
