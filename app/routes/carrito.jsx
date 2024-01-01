import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react'
import { useState, useEffect } from 'react'

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta({data}){
  return[
      {
        title: `GuitaLA - Carrito de compras`
      },
      {
        descripcion: `Venta de guitarras, guitarra, musica, blog, carrito de compras`
      }
  ]
}

const Carrito = () => {

  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

  useEffect(() =>{
    const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0 )
    setTotal(calcularTotal)
  }, [carrito])

  return (
    <section className='contenedor'>
        <h1 className='heading'>Carritos de Compras</h1>
        <div className='contenido'>
          <div className='carrito'>
            <h2>Articulos</h2>
            {carrito.length === 0 ? "Carrito vacio" : (
              carrito.map(producto =>(
                <div key={producto.id} className='producto'>
                  <div>
                    <figure><img src={producto.imagen} alt={`Imagen del Producto ${producto.titulo}`} /></figure>
                  </div>
                  <div>
                    <p className='nombre'>{producto.titulo}</p>
                    <p className='cantidad'>Cantidad:</p>
                    <select 
                      value={producto.cantidad}
                      className='select'
                      onChange = { e => actualizarCantidad({
                        cantidad: parseInt(e.target.value),
                        id: producto.id
                      })}
                    >
                      <option value="0">--Seleccione--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="precio">$ <span>{producto.precio}</span></p>
                    <p className="subtotal">Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                  </div>
                  <button
                    type='button'
                    className='btn_eliminar'
                    onClick={() => eliminarGuitarra(producto.id)}
                  >X</button>
                </div>   
              ))
            )}
          </div>
          <aside className='resumen'>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
    </section>
  )
}

export default Carrito