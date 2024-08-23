import { HeaderNav } from '../../../entities/HeaderNav'
import { HeaderBanner } from '../../../entities/HeaderBanner'
import cl from './Header.module.scss'

export const Header = () => {
  return (
    <header className={cl.header}>
        <HeaderNav/>
        <HeaderBanner/>
    </header>
  )
}
