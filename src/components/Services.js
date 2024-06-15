function Services () {
  return (
    <div className="services">
      <h2>Are you wondering where to get technological services?</h2>
      <p>Worry no more. At Photo Tech Hub we have you covered with avarieties of services</p>

      <div className="price">
        <div className="service">
          <h1>Basic</h1>
          <p>photogrtaphy/Photo taking</p>
          <p>Web Design</p>
          <div>
            <h3>Web Development</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python for web</li>
              <li>Django</li>
            </ul>
          </div>
          <p>Price: $400</p>
          <button>Sign Up</button>
          <p>Have an Account?<button>Login</button></p>
        </div>

        <div className="service">
          <h1>Advanced</h1>
          <p>Advanced photogrtaphy/Photo taking</p>
          <p>Advanced Web Design</p>
          <div>
            <h3>Advanced Web Development</h3>
            <ul>
              <li>Advanced HTML/CSS(APIs)</li>
              <li>JavaScript APIs</li>
              <li>Advanced React(fetching and APIs)</li>
              <li>Python for web</li>
              <li>Django, MongoDB, Advanced PHP Scriptings and APIs</li>
            </ul>
          </div>
          <p>Price: $1000</p>
          <button>Sign Up</button>
          <p>Have an Account?<button>Login</button></p>
        </div>
      </div>

      <section id="reviews">
        <section className="reviews">
          <img src={require("./../images1/manager.jpg")} alt="manager2" />
          <div>
            <h3>Prof Samuel Amo</h3>
            <p>Managing Director at Tech Samples</p>
           <blockquote>Nathan worked at our organization for three years as a Photographer. His work is good and clean all the time. I highly recomment him and His company<b>Photo Tech Hub</b></blockquote>
          </div>
        </section>

        <section className="reviews">
          <img src={require("./../images1/manager1.jpg")} alt="manager2"/>
          <div>
            <h3>Mr Mungala</h3>
            <p> Director at TCS Group of companies</p>
            <blockquote>Nathan worked at our organization for three years as a Web Administartor. His work is good and clean all the time. I highly recomment him and His company<b>Photo Tech Hub</b></blockquote>
          </div>
        </section>

         <section className="reviews">
          <img src={require("./../images1/manager2.jpg")} alt="manager2" />
          <div>
            <h3>Dr Caroline</h3>
            <p>lecture at Oxford Universty</p>
            <blockquote>For the one year Nathan worked at our department as photogrtaphy we really his quality services. I therefore highly him for his goodwork and dedication.</blockquote>
          </div>
        </section>

        <section className="reviews">
          <img src={require("./../images1/manager3.jpg")} alt="manager2" />
          <div>
           <h3>Mr Ronald</h3>
            <p>A business man</p>
            <blockquote>We invited Nathan to take photos and record videos at our wedding. Sincerly, whenever we look at the memorable photos we always remember him. He is an experienced man and all his team at Photo Tech Hub</blockquote>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Services;