import cl from './HeaderBanner.module.scss'
import frame117 from '../../../assets/Frame117.png'
import { useAppDispatch } from '../../../app/store'
import { toggleBasicModal } from '../../../widgets/Modal/model/modalSlice'

export const HeaderBanner = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.banner}>
            <img src={frame117} alt="banner" />
            <div className={cl.bannerDescription}>
                <h3>
                    Ремонт <b>SAMSUNG</b > в Екатеринбурге любой сложности
                </h3>
                <p>Ремонтируем устройства любой сложности в кратчайшие сроки и с гарантией до 3 месяцев</p>
                <button className='filled' onClick={() => dispatch(toggleBasicModal())}>Заказать ремонт</button>
            </div>

        </div>
    )
}
