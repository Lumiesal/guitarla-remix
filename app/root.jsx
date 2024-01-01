import{
  Meta,
  Outlet,
  Link, 
  Links, 
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'
import styles from './styles/index.css';
import Header from './components/header';
import Footer from './components/footer';
import { useState, useEffect } from 'react';

export function meta() {
  return [
    { title: 'Guitarla - Remix' },
    { description: 'venta de guitarras, blog de música' },
  ]
}

export function links(){
  return[
      {
          rel: 'stylesheet',
          href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },
      {
          rel: 'stylesheet',
          href: styles
      },
      {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
      },
      {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'true'
      },
      {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
      }
  ]
}

export default function app() {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() =>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log('render...')
  }, [carrito])

  const agregarCarrito = guitarra =>{
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      //Iterar sobre el arreglo, e identificar el elemento duplicado
      const carritoActualizado = carrito.map( guitarraState => {
        if (guitarraState.id === guitarra.id) {
          //Reescribir cantidad
          guitarraState.cantidad += guitarra.cantidad
        }
        return guitarraState
      })
      //Agg al carrito
      setCarrito(carritoActualizado)
    }else{
      //regsitro nuevo, agg al carrito
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if (guitarraState.id === guitarra.id) {
        //Reescribir cantidad
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }
   
  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id)
    setCarrito(carritoActualizado)
  }
  return (
      <Document>
          <Outlet
            context={{
              agregarCarrito,
              carrito,
              actualizarCantidad,
              eliminarGuitarra
            }}
          />
      </Document>
  )
}


function Document({children}) {
  return (
      <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
          <main id='main'>
            {children}
          </main>
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
      </html>
  )
}

/** Manejo de Errores **/
export function CatchBoundary(){
  const error = useCatch()
  return(
    <Document>
        <section className='content-error'>
          <p className='error'><span className='status'>{error.status}</span><span className='text'>{error.statusText}</span></p>
          <Link to='/' className='error-btn'>Volver al inicio</Link>
        </section>
    </Document>
  )
}

export function ErrorBoundary({}){
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return(
      <Document>
        <section className='content-error'>
          <p className='error'><span className='status'>{error.status}</span><span className='text'>{error.statusText}</span></p>
          <Link to='/' className='error-btn'>Volver al inicio</Link>
        </section>
      </Document> 
    )
  }
  
}