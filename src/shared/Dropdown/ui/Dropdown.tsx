import {  useState } from 'react'
import cl from './Dropdown.module.scss'

interface DropdownProps {
    values: string[]
}

export const Dropdown = ({ values }: DropdownProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const [currentValue, setCurrentValue] = useState(values[0])

   

    return (
        <div  className={`${cl.dropdown} ${isOpen ? cl.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span>{currentValue}</span>
            <svg className={isOpen ? cl.open : ''} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7812 1.22462L6.02812 5.78989C5.73645 6.07004 5.26355 6.07004 4.97188 5.78989L0.218757 1.22462C-0.0729189 0.944468 -0.0729189 0.490259 0.218757 0.210111C0.510432 -0.070037 0.983331 -0.070037 1.27501 0.210111L5.5 4.26813L9.72499 0.210111C10.0167 -0.070037 10.4896 -0.070037 10.7812 0.210111C11.0729 0.490259 11.0729 0.944468 10.7812 1.22462Z" fill="white" />
            </svg>

            <div className={`${cl.dropdownContent} ${isOpen ? cl.open : ''}`}>
                {values.map(value =>
                    <div key={value} className={cl.dropdownItem} onClick={() => setCurrentValue(value)}>
                        {value}
                    </div>
                )}
            </div>
        </div>
    )
}
