import { getGuitarra } from '~/models/guitarras.server'
import { useLoaderData } from "@remix-run/react";

export function meta({data}){
  if (!data || Object.keys(data).length === 0) {
    return[
      {
        title: 'Guitarra no encontrada'
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

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return guitarra

}

const Guitarra = () => {

  const guitarra  = useLoaderData()
  const {descripcion, imagen, precio, url, titulo } = guitarra.data[0].attributes

  return (
    <section className='single guitarra'>
      <figure><img className='imagen' src={imagen.data.attributes.url} alt={`Imagen guitarra ${titulo}`}/></figure>
      <div className='contenido'>
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
      </div>
    </section>
  )
}

export default Guitarra