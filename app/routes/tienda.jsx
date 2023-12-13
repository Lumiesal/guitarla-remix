import { getGuitarras } from '~/models/guitarras.server'
import { useLoaderData } from "@remix-run/react";
import Guitarra from '~/components/guitarra'
import styles from '~/styles/tienda.css'

export function meta(){
    return[
        {
        title: 'GuitaLA - Tienda'
        }
    ]
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

export async function loader(){
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <section className='contenedor tienda'>
        <h2 className='heading'>Nuestra Colección</h2>
        {guitarras?.length &&(
          <div className='guitarras-grid'>
            {guitarras.map( guitarra =>(
              <Guitarra
                key={guitarra?.id}
                guitarra={guitarra?.attributes}
              />    
            ))}
          </div>
        )}
    </section>
  )
}

export default Tienda