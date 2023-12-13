import Navegacion from './navegacion'

const Footer = () => {
    return (
        <header className="footer">
            <div className="contenedor contenido">
                <Navegacion/>
                <p className='copyright'>Todos los derechos reservados <strong>{new Date().getFullYear()}</strong></p>
            </div>
        </header>
    )
}

export default Footer 