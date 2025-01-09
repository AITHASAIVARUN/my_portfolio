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
            Welcome to my portfolio! I am Sai Varun, Data Science Enthusiast &
            Full-Stack Developer
            <br />
            With a passion for solving real-world problems through data and
            technology, <br /> I specialize in creating innovative solutions
            that combine analytical rigor with creative design.
          </p>
        </div>
        <br/>
        <a href="https://drive.google.com/file/d/1kvsh6sP1B5M1F_od8kmE8zQ7cmbdQhv7/view?usp=drive_link">
          <button className="btn  btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero-img" />
      </div>
    </section>
  );
}
