import cl from './Reviews.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Swiper as SwiperType } from "swiper/types";
import { FreeMode, Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { SwiperButtonNext, SwiperButtonPrev } from '../../../entities/SwiperButtons'
import { ReviewCard } from '../../../entities/ReviewCard';

const items = [1, 2, 3, 4, 5, 6, 7]

export const Reviews = () => {
  const swiperRef = useRef<SwiperType>()

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className={cl.reviews}>
      <h1>Отзывы</h1>
      <div className={cl.cards}>
        <SwiperButtonPrev swiperRef={swiperRef} />
        <Swiper
          direction='horizontal'
          spaceBetween={20}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            676: {
              slidesPerView: 3,
            },
          }}
          onRealIndexChange={(swiper: SwiperType) => setCurrentIndex(swiper?.activeIndex)}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, A11y]}
          className={cl.swiper}
        >

          {items.map(item =>
            <SwiperSlide key={item} >
              <ReviewCard />
            </SwiperSlide>
          )}
        </Swiper>
        <SwiperButtonNext swiperRef={swiperRef} />
      </div>

      <div className={cl.navigation}>
        <SwiperButtonPrev swiperRef={swiperRef} />
        <p>0{currentIndex + 1}/0{items.length}</p>
        <SwiperButtonNext swiperRef={swiperRef} />
      </div>
    </div>
  )
}
