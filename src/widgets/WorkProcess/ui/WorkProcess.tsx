import cl from './WorkProcess.module.scss'
import card1 from '../../../assets/card1.png'
import card2 from '../../../assets/card2.png'
import card3 from '../../../assets/card3.png'
import card4 from '../../../assets/card4.png'
import { Card } from '../../../entities/WorkProcessCard/model/types'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { WorkProcessCard } from '../../../entities/WorkProcessCard'
import { Swiper as SwiperType } from "swiper/types";
import { FreeMode, Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { SwiperButtonNext, SwiperButtonPrev } from '../../../entities/SwiperButtons'

const cards: Card[] = [
    {
        id: 1,
        img: card1,
        text: 'Уточняем проблему и проводим диагностику'
    },
    {
        id: 2,
        img: card2,
        text: 'Согласовываем цену и сроки ремонта'
    },
    {
        id: 3,
        img: card3,
        text: 'Осуществляем ремонт'
    },
    {
        id: 4,
        img: card4,
        text: 'Отдаем устройство с ноыми деталями'
    },
]

export const WorkProcess = () => {

    const swiperRef = useRef<SwiperType>()

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <div className={cl.workProcess}>
            <p>Как мы работаем?</p>
            <div className={cl.cards}>
                <Swiper
                    direction='horizontal'
                    slidesPerView='auto'
                    loop={false}
                    onRealIndexChange={(swiper: SwiperType) => setCurrentIndex(swiper?.activeIndex)}
                    onSwiper={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    freeMode={true}
                    modules={[FreeMode, Navigation, A11y]}
                    className={cl.swiper}
                >

                    {cards.map(card =>
                        <SwiperSlide key={card.id} className='slide'>

                            <WorkProcessCard card={card} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className={cl.navigation}>
                <SwiperButtonPrev swiperRef={swiperRef}  />
                <p>0{currentIndex + 1}/0{cards.length}</p>
                <SwiperButtonNext swiperRef={swiperRef}  />
            </div>

        </div>
    )
}
