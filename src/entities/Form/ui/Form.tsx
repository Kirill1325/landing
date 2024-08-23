import { useFormik } from 'formik'
import * as Yup from 'yup'
import cl from './form.module.scss'
import { phoneRegExp } from '../../../widgets/Modal'
import InputMask from "react-input-mask";

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Имя должно содержать не менее 2 символов')
                .required('Поле обязательно'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Неверный формат')
                .required('Поле обязательно'),
        }),
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();

        },
    });

    return (
        <form className={cl.form} onSubmit={formik.handleSubmit}>
            <input
                placeholder='Имя'
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />


            <InputMask
                mask="+7 (999) 999-99-99"
                name='phone'
                id='phone'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder='+7 (000) 000-00-00' />


            <button type="submit" className="filled">Перезвонить мне</button>
        </form>
    )
}
