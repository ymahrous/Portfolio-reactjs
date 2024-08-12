import "./Experience.css";
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return(
    <section id='experience'>
      <h5 className="exp__h5">Technical Skills</h5>
      <h2 className="exp__h2">My Experience</h2>
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>TailwindCSS</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>JavaScript</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>Python3</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>Java</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
            <article className="exp__details">
              <div>
                <BsPatchCheckFill className="exp__icon" />
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;