import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/42.jpg'

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
    name: '42',
    review: "Une formation uniquement en Peer-To-Peer learning"
  },
  {
    avatar: AVTR1,
    name: '42',
    review: "Une pédagogie par projets individuels ou en groupe"
  },
  {
    avatar: AVTR1,
    name: '42',
    review: "Un apprentissage qui rend parfaitement autonome"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>A propos de mon école</h5>
      <h2>42 Paris</h2>
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
            {/* <h5 className='client_review'>{name}</h5> */}
            <small className='client__review'>
              "{review}"
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