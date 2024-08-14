import "./Portfolio.css";
import lastJPG from "../../assets/portfolio6.jpg";
import firstJPG from "../../assets/portfolio1.jpg";
import thirdJPG from "../../assets/portfolio3.jpg";
import fifthJPG from "../../assets/portfolio5.png";
import secondJPG from "../../assets/portfolio2.jpg";
import fourthJPG from "../../assets/portfolio4.jpg";

// {
//   data.map(({ id, img, title, github, demo }) => {
//     <article className="portfolio__item">
//       <div className="portfolio__img">
//         <img src={img} alt={id} />
//       </div>
//       <h3>{title}</h3>
//       <div className="portfolio__cta">
//         <a href={github} className="btn">GitHub</a>
//         <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
//       </div>
//     </article>
//   });
// }

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="portfolio__h5">Recent Work</h5>
      <h2 className="portfolio__h2">Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={firstJPG} alt="live demo" />
          </div>
          <h3>Finance Tracker using AI</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={secondJPG} alt="live demo" />
          </div>
          <h3>Smart Automation Dashboard</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={thirdJPG} alt="live demo" />
          </div>
          <h3>Fitness App</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={fourthJPG} alt="live demo" />
          </div>
          <h3>CollabCode</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={fifthJPG} alt="live demo" />
          </div>
          <h3>HomeCalc</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={lastJPG} alt="live demo" />
          </div>
          <h3>Recipe SaaS</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className="btn">GitHub</a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;