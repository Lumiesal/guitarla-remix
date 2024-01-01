import { useState } from 'react'
import { getGuitarra } from '~/models/guitarras.server'
import { useLoaderData, useOutletContext } from "@remix-run/react";

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

  const {agregarCarrito} = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra  = useLoaderData()
  const {descripcion, imagen, precio, url, titulo } = guitarra.data[0].attributes

  const handleSubmit = e =>{
    e.preventDefault();

    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')      
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      titulo,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <section className='single guitarra'>
      <figure><img className='imagen' src={imagen.data.attributes.url} alt={`Imagen guitarra ${titulo}`}/></figure>
      <div className='contenido'>
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
        <form onSubmit={handleSubmit} className='formulario'>
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            onChange={ e => setCantidad(parseInt(e.target.value))}
            id="cantidad">
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value='Agregar al carrito'
          />
        </form>
      </div>
    </section>
  )
}

export default Guitarra