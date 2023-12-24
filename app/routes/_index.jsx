import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCursos } from "~/models/cursos.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"
import ListadoCursos from "~/components/listado-cursos"
import stylesGuitarras from '~/styles/tienda.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export function meta(){

}
export function links(){
  return[
    {
        rel: 'stylesheet',
        href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}
export async function loader(){
  const [guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data
  } 

}

function Index () {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const {guitarras, posts, cursos} = useLoaderData()
  return (
    <>
      <section className="contenedor productos">
        <h2 className='heading'>Nuestra Colección</h2>
        <ListadoGuitarras
          guitarras = {guitarras}
        />
      </section>
      <section className="contenedor full">
        <h2 className='heading'>Cursos</h2>
        <ListadoCursos
          cursos = {cursos}
        />
      </section>
     {/*  <div>
        <h1>¡Bienvenido a mi página con un Slider!</h1>
        <SliderSwiper />
      </div> */}
      <section className="contenedor">
        <h2 className='heading'>Blog</h2>
        <ListadoPosts
          posts = {posts}
        />
      </section>
    </>
  )
}

export default Index
