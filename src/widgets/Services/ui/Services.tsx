import { ServiceCard } from '../../../entities/ServiceCard'
import cpu from '../../../assets/cpu.png'
import brokenphone from '../../../assets/brokenphone.png'
import cl from './Services.module.scss'
import samsungback from '../../../assets/samsungback.png'
import { useAppDispatch } from '../../../app/store'
import { toggleRepairModal } from '../../Modal/model/modalSlice'

const services = [1, 2, 3, 4, 5, 6, 7, 8]


export const Services = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.services}>
            <img src={samsungback} alt="samsungback" className={cl.samsungback} />

            <h2>Наши услуги</h2>
            <h4>Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</h4>
            <div className={cl.servicesList}>
                {services.map(service => <ServiceCard key={service} />)}
            </div>
            <div className={cl.anotherServicesList}>

                <div className={`${cl.card} ${cl.first}`}>
                    <img src={cpu} alt="cpu" />
                    <p id={cl.first}>Слишком сильные повреждения?</p>
                    <p id={cl.second}>Сдайте ваше устройство на запчасти обратившись в наш сервис</p>
                    <button onClick={() => dispatch(toggleRepairModal())}>
                        <p>Разобрать на запчасти</p>
                        <svg width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.5303 6.53033C57.8232 6.23744 57.8232 5.76256 57.5303 5.46967L52.7574 0.696699C52.4645 0.403806 51.9896 0.403806 51.6967 0.696699C51.4038 0.989593 51.4038 1.46447 51.6967 1.75736L55.9393 6L51.6967 10.2426C51.4038 10.5355 51.4038 11.0104 51.6967 11.3033C51.9896 11.5962 52.4645 11.5962 52.7574 11.3033L57.5303 6.53033ZM0 6.75H57V5.25H0V6.75Z" fill="url(#paint0_linear_1_4935)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_4935" x1="0" y1="6" x2="0.0861335" y2="8.76984" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6792FF" />
                                    <stop offset="1" stopColor="#41C3CB" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </button>
                </div>

                <div className={`${cl.card} ${cl.second}`}>
                    <img src={brokenphone} alt="brokenphone" id={cl.brokenphone} />
                    <p id={cl.first}>Ознакомиться с более точными ценами</p>
                    <button onClick={() => dispatch(toggleRepairModal())}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7168 18.7741L21.7149 18.776L19.1351 21.3582C19.1346 21.3586 19.1342 21.3591 19.1338 21.3595C18.631 21.8581 17.9218 22.0838 17.2406 21.9718C14.1879 21.4635 11.1301 19.8368 8.64675 17.3512C6.15967 14.8619 4.53132 11.8013 4.0304 8.75974L4.03044 8.75973L4.0289 8.75089C4.00989 8.64157 4 8.52905 4 8.40769C4 7.83179 4.23289 7.26942 4.6377 6.86628L4.63914 6.86483L7.21924 4.28477C7.40389 4.10012 7.64503 4 7.90534 4L7.90651 4C8.03351 3.99985 8.1593 4.02482 8.27661 4.07346L8.65739 3.15511L8.27662 4.07346C8.39393 4.12211 8.50048 4.19347 8.59011 4.28344L8.59083 4.28416L11.37 7.0681L11.3706 7.06871C11.5552 7.25336 11.6553 7.49449 11.6553 7.75478L11.6553 7.75502C11.6554 7.88173 11.6304 8.00719 11.5818 8.1242C11.5332 8.24122 11.4619 8.34748 11.3721 8.43688L11.3706 8.43843L9.33659 10.4724L8.84576 10.9632L9.13395 11.5947C9.66262 12.7531 10.3958 13.8067 11.2982 14.705C12.1969 15.6055 13.251 16.3363 14.4097 16.8619L15.0403 17.148L15.5299 16.6584L17.5639 14.6244L16.8568 13.9173L17.5639 14.6244C17.7485 14.4398 17.9897 14.3397 18.25 14.3397L18.2502 14.3397C18.377 14.3396 18.5024 14.3646 18.6194 14.4132C18.7365 14.4618 18.8427 14.5331 18.9321 14.6229L18.9337 14.6244L21.7152 17.4059C21.8999 17.5906 22 17.8317 22 18.092L22 18.0922C22 18.219 21.975 18.3444 21.9264 18.4614C21.8778 18.5784 21.8066 18.6847 21.7168 18.7741Z" stroke="url(#paint0_linear_1_4924)" strokeWidth="2" />
                            <defs>
                                <linearGradient id="paint0_linear_1_4924" x1="23" y1="3" x2="9.6121" y2="26.7303" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6792FF" />
                                    <stop offset="1" stopColor="#41C3CB" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>89610988111</p>
                    </button>
                </div>

                <div className={`${cl.card} ${cl.trird}`}>
                    <p id={cl.first}>Покупайте запчасти онлайн</p>
                    <p id={cl.second}>Комплектующие на различные девайсы прямо со склада</p>
                    <button onClick={() => dispatch(toggleRepairModal())}>
                        <p>Посмотреть</p>
                        <svg width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.5303 6.53033C57.8232 6.23744 57.8232 5.76256 57.5303 5.46967L52.7574 0.696699C52.4645 0.403806 51.9896 0.403806 51.6967 0.696699C51.4038 0.989593 51.4038 1.46447 51.6967 1.75736L55.9393 6L51.6967 10.2426C51.4038 10.5355 51.4038 11.0104 51.6967 11.3033C51.9896 11.5962 52.4645 11.5962 52.7574 11.3033L57.5303 6.53033ZM0 6.75H57V5.25H0V6.75Z" fill="url(#paint0_linear_1_4935)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_4935" x1="0" y1="6" x2="0.0861335" y2="8.76984" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6792FF" />
                                    <stop offset="1" stopColor="#41C3CB" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
