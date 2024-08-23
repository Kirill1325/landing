import { Form } from "../../../entities/Form"
import cl from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={cl.contacts}>
            <h1>Заберем ваш сломанный смартфон прямо из дома</h1>
            <h3>Оставьте Ваш номер телефона и мы перезвоним<br/> Вам прямо сейчас.</h3>
            <Form />
        </div>
    )
}
