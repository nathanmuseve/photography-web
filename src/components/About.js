function About() {
  return (
    <div>
      <h1>About Us and whta we do</h1>
      <h2>Photo Tech Hub</h2>
      <p>This is aprivate company committed in providenig technological solutions. We are determined in delivering high quality service to our clients. Our services include but not limited to photogrtaphy and web design and development as you will see in our services section</p>
      
      <div className="team">
        <h3>Our Team</h3>
        <p>Our team is made up of highly skilled professionals with years of experience in the field </p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={require("./../images1/professional-pht2.jpg")} alt="Proffesional"/>
          <h2>Nathan Museve</h2>
          <p>Founder and CEO At Photo Tech Hub</p>
          <p>I am a committed and self-desciplined worker. As a company we are determined in providing quality solutions; clean and memorable photos and programming solutions</p>
        </div>

        <div className="card">
          <img src={require("./../images1/professional-pht.jpg")} alt="professional"/>
          <h2>Nancie Emeldah</h2>
          <p>Managing Director At Photo Tech Hub</p>
          <p>I am a committed to see that the company meets daily targets and at long last achieve its vision</p>
        </div>

        <div className="card">
          <img src={require("./../images1/professional-pht1.jpg")} alt="professional" />
          <h2>Happiness Joy</h2>
          <p>Secritary At Photo Tech Hub</p>
          <p>I am a committed to providing quality services to our customers that will see them want to visit us again again.</p>
        </div>
      </div>

      <div className="journey">
        <h2>Message from the CEO, Photo Tech Hub Journey</h2>
        <p>While running the company or any organization is not easy.Okay leave alone running, starting is not something many dream but it remain just as a mere dream</p>
        <p>Went to universty and starting something not close to technology. But technological skilss started to unfold the moment I was invited to a certain interview. I was the best candidate who stood out with the academic qualification but unfortunately the task required more use of computer than just a hand and a pen.</p>
        <p>As a man who never give up I decided to seach for knowledge in computer that led me enrolling for computer basic skills.<button>Read more</button></p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <p>photogrtaphy</p>
        <div className="progress"> <br className="pg-95%" /> </div>
        <p>Web Design and Web Development</p>
        <div className="progress"> <br className="pg-85%"/> </div>
        <p>JavaScript</p>
        <div className="progress"> <br className="pg-65%" /> </div>
        <p>React</p>
        <div className="progress"> <br className="pg-75%"/> </div>
      </div>

      <div className="engagements">
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

        <button>login and see book</button>

        <div className="soft-skilss">
          <p>Team leader</p>
          <p>Good communicator</p>
          <p>Negotiator</p>
          <p>Time managerr</p>
          <p>Desciplined</p>
          <p>Adaptble</p>
          <p>Flexible and patient</p>
          <p>Always happy</p>
        </div>
      </div>
    </div>
  );
}
export default About;