import "./Contacts.css"

function Contacts() {
  return (
    <div className="contacts">
      <p>Please reach on us quickly<quote> <b>Furahia services zetu. Huduma bora kwa wote!</b></quote></p>

      <div className="dflex">
        <ul>
          <li><i class="fa-solid fa-location-dot"></i>Nairobi, Kenya</li>
          <li><i class="fa-solid fa-phone"></i>+254790711289</li>
          <li><i class="fa-solid fa-envelope"></i>musevenathan@gmail.com</li>
        </ul>

        <section className="return-menu">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </section>
        <form id="myForm">

            <input type="text" name="Name" placeholder="Name" required/>

            <input type="email" name="Email" placeholder="Email" required />

            <input type="text" name="Subject" placeholder="Subject" />

            <textarea value='' placeholder="write something.."></textarea>

          <button type="submit"> <i class="fa-solid fa-paper-plane"></i> SEND MESSAGE</button>

          <p>
            <a href="#" >SignUp</a> 
            <a href="#" >Login</a>
          </p>
        </form>
      </div>

      <div className="media">
        <section id="media" >
          <a href="#" ><i class="fa-brands fa-github"></i></a>
          <a href="#" ><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" ><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" ><i class="fa-brands fa-discord"></i></a>
          <a href="#" ><i class="fa-brands fa-facebook"></i></a>
        </section>
        <p><b>&copy; 2024.</b> All rights reserved</p>
        <p>Photo Tech Hub version 1.0.0</p>
      </div>
    </div>
  )
}
export default Contacts;