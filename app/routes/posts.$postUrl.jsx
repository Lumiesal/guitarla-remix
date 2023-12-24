import { getPost } from '~/models/posts.server'
import { useLoaderData } from "@remix-run/react";
import { formatarFecha } from "~/utils/helpers";
import { Link } from "@remix-run/react";

export function meta({data}){
  if (!data || Object.keys(data).length === 0) {
    return[
      {
        title: 'Post no encontrado'
      },
      {
        descripcion: 'Blog, Blogs de guitarras, Blog no encontrado'
      }
    ]  
  }
  return[
      {
        title: `GuitaLA - ${data.data[0].attributes.titulo}`
      },
      {
        descripcion: `Blog, Blogs de guitarras, Blog ${data.data[0].attributes.titulo}`
      }
  ]
}

export async function loader({params}){
  const {postUrl} = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  return post
}

const Post = () => {

  const post  = useLoaderData()
  const {contenido, imagen, url, titulo, publishedAt } = post?.data[0]?.attributes

  return (
    <section className='single-post'>
      <article className="post">
            <figure>
                <img className='imagen' src={imagen.data.attributes.url} alt={`imagen post ${titulo}`}/>
            </figure>
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatarFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
                <Link className="enlace" to={`/posts`}>Volver a blog</Link>
            </div>
        </article>
    </section>
  )
}

export default Post