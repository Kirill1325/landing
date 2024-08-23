import { useState } from "react"
import { SmartphoneCard } from "../../../entities/SmartphoneCard"
import cl from './SmartphoneList.module.scss'

const smartphones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export const SmartphoneList = () => {

  const [itemsShown, setItemsShown] = useState(12)

  return (
    <div className={cl.wrapper}>
      <h3>Выберите модель</h3>
      <h5>Выберите свою модель</h5>
      <div className={cl.smartphoneList}>
        {smartphones.slice(0, itemsShown).map(smartphone => <SmartphoneCard key={smartphone} />)}
      </div>
      <button onClick={() => setItemsShown(itemsShown + 4)} className="filled" id={cl.showAll}>Показать все</button>
    </div>
  )
}
