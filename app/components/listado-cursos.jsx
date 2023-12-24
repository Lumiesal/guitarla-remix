import Cursos from "./cursos"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'

const ListadoCursos = ({cursos}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      {cursos?.length &&(
        <div className='cursos'>
            <Swiper  
              loop={true}
              slidesPerView={1}
              className="mySwiper"
            >
            {cursos.map( curso =>(   
              <SwiperSlide>
              <Cursos
              key={curso?.id}
              curso={curso?.attributes}
              />
              </SwiperSlide> 
              ))}
            </Swiper> 
        </div>
        )} 
    </>
  )
}

export default ListadoCursos
