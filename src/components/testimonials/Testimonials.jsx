import "./Testimonials.css";
import CLOne from "../../assets/avatar1.jpg";
import CLTwo from "../../assets/avatar2.jpg";
import CLFour from "../../assets/avatar4.jpg";
import CLThree from "../../assets/avatar3.jpg";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className="about__h5">Clients Reviews</h5>
      <h2 className="about__h5">Testimonials</h2>
      <div className="container test__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={CLOne} alt="client" />
            <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia.</small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={CLTwo} alt="client" />
            <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia.</small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={CLThree} alt="client" />
            <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia.</small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={CLFour} alt="client" />
            <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem blanditiis repellat quis dicta corrupti, iusto ad beatae accusamus perferendis qui et obcaecati mollitia vero quae expedita quia quos officia.</small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;