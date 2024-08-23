import cl from './Consultation.module.scss'
import { Form } from '../../../entities/Form'

export const Consultation = () => {
    return (
        <div className={cl.consultation}>
            <h1>Нужна консультация?</h1>
            <p>Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.</p>
            <Form />
        </div>
    )
}
