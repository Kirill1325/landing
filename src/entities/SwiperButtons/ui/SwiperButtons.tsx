import cl from './SwiperButtons.module.scss'

interface SwiperButtonProps {
    swiperRef: any,
}

export const SwiperButtonPrev = ({ swiperRef }: SwiperButtonProps) => {
    return (
        <button
            onClick={() => { swiperRef.current?.slidePrev() }}
            className={cl.swiperArrow}
            // id='arrow-prev'
        >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.469669 5.46967C0.176776 5.76256 0.176776 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696698C6.01041 0.403805 5.53553 0.403805 5.24264 0.696698L0.469669 5.46967ZM16 5.25L0.999999 5.25L0.999999 6.75L16 6.75L16 5.25Z" fill="#6792FF" />
                <defs>
                    <linearGradient id="paint0_linear_1_10814" x1="16" y1="6" x2="15.6769" y2="3.26566" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6792FF" />
                        <stop offset="1" stopColor="#41C3CB" />
                    </linearGradient>
                </defs>
            </svg>

        </button>
    )
}

export const SwiperButtonNext = ({ swiperRef }: SwiperButtonProps) => {
    return (
        <button
            onClick={() => { swiperRef.current?.slideNext() }}
            className={cl.swiperArrow}
            // id='arrow-next'
        >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76257 15.5303 5.46967L10.7574 0.696701C10.4645 0.403808 9.98959 0.403807 9.6967 0.696701C9.40381 0.989594 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM-1.31134e-07 6.75L15 6.75L15 5.25L1.31134e-07 5.25L-1.31134e-07 6.75Z" fill="#6792FF" />
            </svg>

        </button>
    )
}
