import { Outlet, useOutletContext } from "@remix-run/react";
import styles from '~/styles/tienda.css'

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Tienda() {  
  return (
    <div className='contenedor'>
        <Outlet
          context={useOutletContext()}
        />
    </div>
  )
}

export default Tienda