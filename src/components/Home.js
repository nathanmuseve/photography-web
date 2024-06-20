import Contacts from "./Contacts"
import "./Home.css"
function Home() {
  return (
    <div className="home-container">

      <div className="hero-image">
        <div className="hero-text">
          <h1><span>I'm</span> <span>Nathan</span> <span>Museve</span></h1>
          <p>Founder and CEO At Photo Tech Hub.</p>
          <p>A Photographer and Web Developer</p>
          <button><a href="./Nathan_Museve_CV.pdf"  target="_blank" download="./Nathan_Museve_CV.pdf"><i class="fa-solid fa-download"></i>Download CV</a></button>
        </div>
      </div>
      <Contacts />
    </div>
  )
}
export default Home;