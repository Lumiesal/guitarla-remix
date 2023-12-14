import { getGuitarra } from '~/models/guitarras.server'
import { useLoaderData } from "@remix-run/react";
import styles from '~/styles/tienda.css'

export function meta({data}){
  if (!data || Object.keys(data).length === 0) {
    return[
      {
        title: 'Post no encontrado'
      },
      {
        descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada'
      }
    ]  
  }
  return[
      {
        title: `GuitaLA - ${data.data[0].attributes.titulo}`
      },
      {
        descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`
      }
  ]
}

export function links(){
  return[
      {
          rel: 'stylesheet',
          href: styles
      }
  ]
}

export async function loader({params}){
  const {postaUrl} = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: 'Post no encontradp'
    })
  }
  return post

}

const Post = () => {

  const post  = useLoaderData()
  const {descripcion, imagen, url, titulo } = post.data[0].attributes

  return (
    <section className='contendor single guitarra'>
      <figure><img className='imagen' src={imagen.data.attributes.url} alt={`Imagen guitarra ${titulo}`}/></figure>
      <div className='contenido'>
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{descripcion}</p>
      </div>
    </section>
  )
}

export default Post 