
import "./Services.css"
function Services () {
  return (
    <div className="services">
      <h1>Are you wondering where to get technological services?</h1>
      <p>Worry no more. At Photo Tech Hub we have you covered with avarieties of services</p>

      <div className="price">
        <div className="service">
          <h1>Basic</h1>
          <p>Photography</p>
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
          <p>Have an Account? <a href="login">login</a> <a href="sign up">Sign Up</a></p>
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
          <p>Have an Account? <a href="login">login</a> <a href="sign up">Sign Up</a></p>
        </div>
      </div>

      <section id="reviews">
        <section className="reviews">
          <img src={require("./../images1/manager.jpg")} alt="manager2" />
          <div>
            <h3>Prof Samuel Amo</h3>
            <p>Managing Director at Tech Samples</p>
           <q>Nathan worked at our organization for three years as a Photographer. His work is good and clean all the time. I highly recomment him and His company<b>Photo Tech Hub</b></q>
           
           {/* rating  */}
           <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          </div>
        </section>

        <section className="reviews">
          <img src={require("./../images1/manager1.jpg")} alt="manager2"/>
          <div>
            <h3>Mr Mungala</h3>
            <p> Director at TCS Group of companies</p>
            <q>Nathan worked at our organization for three years as a Web Administartor. His work is good and clean all the time. I highly recomment him and His company<b>Photo Tech Hub</b></q>

              {/* rating  */}
           <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          </div>
        </section>

         <section className="reviews">
          <img src={require("./../images1/manager2.jpg")} alt="manager2" />
          <div>
            <h3>Dr Caroline</h3>
            <p>lecture at Oxford Universty</p>
            <q>For the one year Nathan worked at our department as photogrtaphy we really his quality services. I therefore highly him for his goodwork and dedication.</q>

              {/* rating  */}
           <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>
          </div>
        </section>

        <section className="reviews">
          <img src={require("./../images1/manager3.jpg")} alt="manager2" />
          <div>
           <h3>Mr Ronald</h3>
            <p>A business man</p>
            <q>We invited Nathan to take photos and record videos at our wedding. Sincerly, whenever we look at the memorable photos we always remember him. He is an experienced man and all his team at Photo Tech Hub</q>

              {/* rating  */}
           <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Services;