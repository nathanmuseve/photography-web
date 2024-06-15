function Contacts() {
  return (
    <div className="contacts">
      <h1>Dont get Stuck. Dont delay.Provided below are our contact information</h1>
      <p>Please reach on us quickly<quote>Furahia services zetu. Huduma bora kwa wote!</quote></p>

      <div className="dflex">
        <ul>
          <li><i class="fa-solid fa-location-dot"></i>Nairobi, Kenya</li>
          <li><i class="fa-solid fa-phone"></i>+254790711289</li>
          <li><i class="fa-solid fa-envelope"></i>musevenathan@gmail.com</li>
        </ul>

        <form>
          <div>
            <span><i class="fa-solid fa-user"></i></span>
            <input type="text" name="Name" placeholder="Name" required/>
          </div>

          <div>
            <span><i class="fa-solid fa-envelope"></i></span>
            <input type="email" name="Email" placeholder="Email" required />
          </div>

          <input type="text" name="Subject" placeholder="Subject" />

          <textarea value='' ></textarea>

          <button type="submit"> <i class="fa-solid fa-paper-plane"></i> SEND MESSAGE</button>

          <p>
            <a href="#" >SignUp</a>
            <a href="#" >Login</a>
          </p>
        </form>
      </div>

      <div className="media">
        <section>
          <a href="#" ><i class="fa-brands fa-github"></i></a>
          <a href="#" ><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" ><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" ><i class="fa-brands fa-discord"></i></a>
          <a href="#" ><i class="fa-brands fa-facebook"></i></a>
        </section>
        <p>&copy; 2024 All rights reserved</p>
        <p>Photo Tech Hub version 3.0.2</p>
      </div>
    </div>
  )
}
export default Contacts;