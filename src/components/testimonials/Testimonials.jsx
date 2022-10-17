import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ppblack.png'
import AVTR2 from '../../assets/ppblack.png'
import AVTR3 from '../../assets/ppblack.png'

  // core version + navigation, pagination modules:
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination } from "swiper";
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'gne',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    avatar: AVTR2,
    name: 'gne',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    avatar: AVTR3,
    name: 'gne',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper modules={[Pagination]} className="container testimonials__container"
        pagination={{ dynamicBullets: true,}}
        slidesPerView={1}
        spaceBetween={40}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt="avatar one" />
            </div>
            <h5 className='client_review'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials