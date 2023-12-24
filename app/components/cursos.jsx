const Cursos = ({curso}) => {

    const {contenido, imagen, titulo} = curso

    return (
      <div className="curso">
        {/* <style jsx="true">{`
            .curso{
                background-image:linear-gradient(to right, #000000a6, #000000b3), url(${imagen.data.attributes.url});
            }
        `}</style> */}
        <figure>
            <img src={imagen.data.attributes.url} alt={`Imagen guitarra ${titulo}`} />
        </figure>
        <div className="contenido">
            <h3 className="heading">{titulo}</h3>
            <p className="texto">{contenido}</p>
        </div>
      </div>
  )
}
export default Cursos
  