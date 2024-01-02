import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

const Header = ({carrito}) => {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link top='/'>
                    <img className="logo" src={logo} alt='imagen logo' />
                </Link>
                <Navegacion
                    carrito = {carrito}
                />
            </div>
        </header>
    )
}

export default Header
