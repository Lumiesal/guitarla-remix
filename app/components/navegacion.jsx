import { Link, useLocation } from "@remix-run/react"
import CartIcon from "./cartIcon"

const Navegacion = () => {

    const location = useLocation()

    return (
        <nav className="navegacion">
            <Link 
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link 
                to='/nosotros' 
                className={location.pathname === '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link 
                to='/guitarras' 
                className={location.pathname === '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link 
                to='/posts' 
                className={location.pathname === '/posts' ? 'active' : ''}
            >Blog</Link>
            <Link 
                to='/carrito' 
                className="cart"
            ><CartIcon width="30px" height="30px"/></Link>
        </nav>
    )
}

export default Navegacion
