import { Link } from "@remix-run/react";
import { formatarFecha } from "~/utils/helpers";

function Post({post}) {

    const {contenido, imagen, url, titulo, publishedAt } = post
    return (
        <article className="post">
            <figure>
                <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen post ${titulo}`}/>
            </figure>
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatarFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post
