import cl from './Modal.module.scss'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { toggleServiceModal } from '../model/modalSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from "react-input-mask";
import { toggleSubmittedModal } from '../../SubmittedModal/model/submittedModalSlice'

const phoneRegExp = /^(\+7) \(\d{3}\) \d{3}-\d{2}-\d{2}$/

export const ServiceModal = () => {

    const dispatch = useAppDispatch()
    const { serviceModal } = useAppSelector(state => state.modalSlice)

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            checkbox: 'false'
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Имя должно содержать не менее 2 символов')
                .required('Поле обязательно'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Неверный формат')
                .required('Поле обязательно'),
            checkbox: Yup.boolean().required('Поле обязательно').oneOf([true], 'Поле обязательно')
        }),
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            dispatch(toggleServiceModal())
            dispatch(toggleSubmittedModal())
        },
    });

    return (
        <div className={`${cl.modal} ${serviceModal ? cl.open : ''}`} onClick={() => dispatch(toggleServiceModal())}>
            <div className={cl.modalContent} onClick={e => e.stopPropagation()}>

                <div className={cl.modalHeader}>
                    <p>Заполните форму и с вами свяжутся  в ближайшее время</p>
                    <button onClick={() => dispatch(toggleServiceModal())}>
                        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='21.5784' y='6.55713' width='2.42308' height='21' transform='rotate(44.9077 21.5784 6.55713)' fill='#1E1E1E' />
                            <rect x='23.3157' y='21.4038' width='2.42308' height='21' transform='rotate(134.908 23.3157 21.4038)' fill='#1E1E1E' />
                        </svg>

                    </button>
                </div>

                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor='name'>ВАШЕ ИМЯ:</label>
                    <input
                        placeholder='Имя'
                        id='name'
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className={cl.error}>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor='phone'>ВАШ ТЕЛЕФОН:</label>
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        name='phone'
                        id='phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder='+7 (000) 000-00-00' />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className={cl.error}>{formik.errors.phone}</div>
                    ) : null}

                    <label>Услуга</label>
                    <div className={cl.service}>
                        <p>Замена light сенсора на телефоне</p>
                        <p>Apple, смартфон</p>
                    </div>

                    {formik.touched.checkbox && formik.errors.checkbox ? (
                        <div className={cl.error}>{formik.errors.checkbox}</div>
                    ) : null}
                    <div className={cl.submit}>

                        <input
                            type='checkbox'
                            id='checkbox'
                            name='checkbox'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.checkbox}
                        />


                        <span className={cl.checkmark}></span>
                        <label htmlFor='checkbox'>Я соглашаюсь на обработку персональных данных и c <b>политикой конфиденциальности</b></label>

                    </div>
                    <button type='submit' ><p>Отправить</p></button>
                </form>

            </div>
        </div>
    )
}
