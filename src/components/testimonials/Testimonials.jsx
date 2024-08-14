import 'swiper/css';
import "./Testimonials.css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CLOne from "../../assets/avatar1.jpg";
import CLTwo from "../../assets/avatar2.jpg";
import CLFour from "../../assets/avatar4.jpg";
import CLThree from "../../assets/avatar3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
  const data = [
    {
      avatar: CLOne,
      name: 'Client Name',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia."
    },
    {
      avatar: CLTwo,
      name: 'Client Name',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia."
    },
    {
      avatar: CLThree,
      name: 'Client Name',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia."
    },
    {
      avatar: CLFour,
      name: 'Client Name',
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia."
    },
  ]

  return (
    <section id='testimonials'>
      <h5 className="test__h5">Clients Reviews</h5>
      <h2 className="test__h2">Testimonials</h2>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={40} slidesPerView={1} className="container test__container">
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="client" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials;