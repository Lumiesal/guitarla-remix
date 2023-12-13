import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return[
        {
        title: 'GuitaLA - Nosotros'
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

function Nosotros() {
  return (
    <section className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="Imagen sobre nosotros" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae adipisci, ut incidunt cupiditate voluptate necessitatibus sint eligendi dolorem inventore quasi possimus temporibus. Accusantium beatae obcaecati reprehenderit esse, veniam eosut incidunt cupiditate voluptate necessitatibus sint eligendi dolorem inventore quasi possimus temporibus. Accusantium beatae obcaecati reprehenderit esse, veniam eos.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae adipisci, ut incidunt cupiditate voluptate necessitatibus sint eligendi dolorem inventore quasi possimus temporibus. Accusantium beatae obcaecati reprehenderit esse, veniam eosut incidunt cupiditate voluptate necessitatibus sint eligendi dolorem inventore quasi possimus temporibus. Accusantium beatae obcaecati reprehenderit esse, veniam eos.</p>
            </div>
        </div>
    </section>
  )
}

export default Nosotros
