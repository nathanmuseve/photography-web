import "./About.css";
import Contacts from "./Contacts";

function About() {
  return (
    <div>

      <div id="about">

        <div className='about'>
          <h1>About Us and whta we do</h1>
          <p><b>Photo Tech Hub</b> this is aprivate company committed in providenig technological solutions. We are determined in delivering high quality service to our clients. Our services include but not limited to photogrtaphy and web design and development as you will see in our services section</p>
        </div>

        <div className="team">
          <h2>Our Team</h2>
          <p>Our team is made up of highly skilled professionals with years of experience in the fields. </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={require("./../images1/professional-pht2.jpg")} alt="Proffesional"/>
            <div>
              <h2>Prof Nathaniel</h2>
              <p>Founder and CEO At Photo Tech Hub</p>
              <q>I am a committed and self-desciplined worker. As a company we are determined in providing quality solutions; clean and memorable photos and programming solutions</q>
            </div>
          </div>

          <div className="card">
            <img src={require("./../images1/professional-pht.jpg")} alt="professional"/>
            <div>
              <h2>Nancie Emeldah</h2>
              <p>Managing Director At Photo Tech Hub</p>
              <q>I am a committed to see that the company meets daily targets and at long last achieve its vision</q>
            </div>
          </div>

          <div className="card">
            <img src={require("./../images1/professional-pht1.jpg")} alt="professional" />
            <div>
              <h2>Happiness Joy</h2>
              <p>Secritary At Photo Tech Hub</p>
              <q>I am a committed to providing quality services to our customers that will see them want to visit us again again.</q>
            </div>
          </div>
        </div>

        <div>
          <h2>Message from the CEO, Photo Tech Hub Journey</h2>
          <div className="journey">
            <img src={require("./../images1/professional-pht2.jpg")} alt="Proffesional"/>
            <div>
              <p>While running the company or any organization is not easy.Okay leave alone running, starting is not something many dream but it remain just as a mere dream</p>
              <p>Went to universty and starting something not close to technology. But technological skilss started to unfold the moment I was invited to a certain interview. I was the best candidate who stood out with the academic qualification but unfortunately the task required more use of computer than just a hand and a pen.</p>
              <p>As a man who never give up I decided to seach for knowledge in computer that led me enrolling for computer basic skills.<button className="jbtn">Read more</button></p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <p>photogrtaphy</p>
          <div className="progress pg95"> 95%</div>
          <p>Web Design and Web Development</p>
          <div className="progress pg85">85%</div>
          <p>JavaScript</p>
          <div className="progress pg65">65%</div>
          <p>React</p>
          <div className="progress pg75">75%</div>
        </div>

        <div className="soft-skills">
          <h2>Soft Skills</h2>
         <ul>
          <li>Team leader</li>
          <li>Good communicator</li>
          <li>Negotiator</li>
          <li>Time managerr</li>
          <li>Desciplined</li>
          <li>Adaptble</li>
          <li>Flexible and patient</li>
          <li>Always happy</li>
          </ul>
        </div>

        <div className="engagements">
          <h2>Engagements</h2>
          <div className="activities">
            <h3>15+</h3>
            <p>Partners</p>
          </div>

          <div className="activities">
            <h3>75+</h3>
            <p>Projects Done</p>
          </div>

           <div className="activities">
            <h3>155+</h3>
            <p>Meetings and Engagements</p>
          </div>

          <div className="activities">
            <h3>5+</h3>
            <p>Ongoing Projetcs</p>
          </div>

          <button className="ebtn" >have an account? <a href="Login.js">login </a> </button>
        </div>

      </div>

      <Contacts />
    </div>

  );
}
export default About;