export default function HeroSection() {
  return (
    <section id="herosection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Sai Varun Aitha</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">FULLSTACK</span>{" "}
            <br />
            DEVELOPER
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Repudiandae sunt nihil reiciendis voluptatibus nemo dolorem dolores
            veritatis rem perferendis, quas magnam sapiente voluptatem. Dicta
            accusamus, cupiditate quidem repellendus voluptates iste?
          </p>
        </div>
        <button className="btn  btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero-img" />
      </div>
    </section>
  );
}
 