import "./Portfolio.css";
import lastJPG from "../../assets/portfolio6.jpg";
import firstJPG from "../../assets/portfolio1.jpg";
import thirdJPG from "../../assets/portfolio3.jpg";
import fifthJPG from "../../assets/portfolio5.png";
import secondJPG from "../../assets/portfolio2.jpg";
import fourthJPG from "../../assets/portfolio4.jpg";

const Portfolio = () => {
  const data = [
    {img: firstJPG, title: 'Finance Tracker using AI', github: 'https://github.com', demo: 'https://dribble.com'},
    {img: secondJPG, title: 'Smart Automation Dashboard', github: 'https://github.com', demo: 'https://dribble.com'},
    {img: thirdJPG, title: 'Fitness App', github: 'https://github.com', demo: 'https://dribble.com'},
    {img: fourthJPG, title: 'CollabCode', github: 'https://github.com', demo: 'https://dribble.com'},
    {img: fifthJPG, title: 'HomeCalc', github: 'https://github.com',demo: 'https://dribble.com'},
    {img: lastJPG, title: 'Recipe SaaS', github: 'https://github.com', demo: 'https://dribble.com'},
  ];

  return (
    <section id="portfolio">
      <h5 className="portfolio__h5">Recent Work</h5>
      <h2 className="portfolio__h2">Portfolio</h2>
      <div className="container portfolio__container">{
        data.map(({ img, title, github, demo }, index) => (
          <article className="portfolio__item">
            <div className="portfolio__img">
              <img src={img} alt={index} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__cta">
              <a href={github} className="btn">GitHub</a>
              <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
            </div>
          </article>
        ))
      }</div>
    </section>
  )
}

export default Portfolio;