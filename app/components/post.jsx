import { Link } from "@remix-run/react";

function Post({post}) {

    const {contenido, imagen, url, titulo, publishedAt } = post
    return (
        <article>
            <figure>
                <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen post ${titulo}`}/>
            </figure>
            <div className="contenido">
                <h3 className="heading">{titulo}</h3>
                <p className="fecha">{publishedAt}</p>
                <p className="resumen">{contenido}</p>
                <Link to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}

export default Post
