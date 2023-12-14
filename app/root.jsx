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
  return (
      <Document>
          <Outlet/>
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