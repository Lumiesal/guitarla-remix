import { Link, useLocation } from "@remix-run/react"
import { useState, useEffect } from "react"
import CartIcon from "./cartIcon"

const Navegacion = ({carrito}) => {

    const [count, setCount] = useState(0) 
    const location = useLocation()
    useEffect(() =>{
        if (Array.isArray(carrito)) {
            const countTotal = carrito.reduce((total, producto)  => total + (producto.cantidad), 0 )
            setCount(countTotal)
        } else {
        // Si carrito no es un array, establecer count en 0
            setCount(0)
        }
    }, [carrito])

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
            >
                <CartIcon width="30px" height="30px"/>
                <span className="count">{count}</span>
            </Link>
        </nav>
    )
}

export default Navegacion
