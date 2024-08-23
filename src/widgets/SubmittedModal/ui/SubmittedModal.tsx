import cl from './SubmittedModal.module.scss'
import { useAppDispatch } from '../../../app/store'
import { toggleSubmittedModal } from '../model/submittedModalSlice'

export const SubmittedModal = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.submittedModalContent}>
            <div className={cl.buttonContainer}>
                <button onClick={() => dispatch(toggleSubmittedModal())}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="21.3328" y="7.03564" width="2.41502" height="20.9302" transform="rotate(44.9077 21.3328 7.03564)" fill="url(#paint0_linear_1_12159)" />
                        <rect x="23.0642" y="21.8325" width="2.41502" height="20.9302" transform="rotate(134.908 23.0642 21.8325)" fill="url(#paint1_linear_1_12159)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_12159" x1="21.3328" y1="7.03564" x2="25.0943" y2="7.28051" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6792FF" />
                                <stop offset="1" stop-color="#41C3CB" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_12159" x1="23.0642" y1="21.8325" x2="26.8258" y2="22.0774" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6792FF" />
                                <stop offset="1" stop-color="#41C3CB" />
                            </linearGradient>
                        </defs>
                    </svg>

                </button>
            </div>
            <h4>Спасибо за заявку!</h4>
            <svg  width="107" height="108" viewBox="0 0 107 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M69.8308 17.323C61.9272 13.8014 53.097 12.929 44.6571 14.8358C36.2172 16.7427 28.6198 21.3268 22.998 27.9043C17.3762 34.4818 14.0312 42.7003 13.4619 51.3342C12.8926 59.9681 15.1295 68.5547 19.8389 75.8135C24.5483 83.0722 31.478 88.6142 39.5945 91.6128C47.7109 94.6114 56.5792 94.906 64.8768 92.4527C73.1744 89.9993 80.4566 84.9295 85.6374 77.9993C90.8182 71.0691 93.62 62.6499 93.6249 53.9973V49.8981C93.6249 47.4359 95.621 45.4398 98.0833 45.4398C100.546 45.4398 102.542 47.4359 102.542 49.8981V53.9998C102.536 64.5753 99.1111 74.868 92.779 83.3382C86.4469 91.8084 77.5464 98.0049 67.405 101.003C57.2635 104.002 46.4245 103.642 36.5044 99.9769C26.5843 96.3119 18.1147 89.5384 12.3587 80.6666C6.60268 71.7948 3.86873 61.3001 4.56456 50.7475C5.26039 40.195 9.34872 30.1501 16.2198 22.1109C23.0909 14.0717 32.3766 8.46904 42.6921 6.1384C53.0075 3.80777 63.8 4.87406 73.4599 9.17827C75.709 10.1804 76.7199 12.8161 75.7177 15.0652C74.7156 17.3143 72.0799 18.3252 69.8308 17.323Z" fill="url(#paint0_linear_1_12162)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M101.234 15.1792C102.976 16.9195 102.977 19.7423 101.237 21.4843L56.6539 66.1122C55.818 66.949 54.6838 67.4193 53.501 67.4196C52.3181 67.4199 51.1837 66.9501 50.3473 66.1138L36.9723 52.7388C35.2312 50.9977 35.2312 48.1748 36.9723 46.4337C38.7134 44.6926 41.5363 44.6926 43.2774 46.4337L53.4983 56.6546L94.9291 15.1824C96.6693 13.4404 99.4922 13.439 101.234 15.1792Z" fill="url(#paint1_linear_1_12162)" />
                <defs>
                    <linearGradient id="paint0_linear_1_12162" x1="4.45825" y1="4.93262" x2="120.836" y2="70.5891" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6792FF" />
                        <stop offset="1" stopColor="#41C3CB" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_12162" x1="35.6665" y1="13.875" x2="105.566" y2="63.1276" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6792FF" />
                        <stop offset="1" stopColor="#41C3CB" />
                    </linearGradient>
                </defs>
            </svg>

            <p>Наш менеджер свяжется с Вами</p>

        </div>
    )
}
