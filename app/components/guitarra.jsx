import { Link } from "@remix-run/react";
const Guitarra = ({guitarra}) => {
    const {descripcion, imagen, precio, url, titulo } = guitarra
    return (
        <div className="guitarra">
            <figure>
                <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${titulo}`} />
            </figure>
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="descripcion">{descripcion}</p>
                <p>{precio}</p>
                <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitarra
