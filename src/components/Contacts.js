import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Contacts.css"

function Contacts() {

  const [data, setData] = useState({});
  const [textarea, setTextarea] = useState('');

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData(values => ({...values, [name]:value}))
  }

  const handleTextarea = (event) => {
    setTextarea(event.target.value)
  }

  const ClearOutPuts = (event) => {
    Array.from (event.target).forEach((e) =>(e.value = " "));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    ClearOutPuts(event);
    
    console.log(data);
    setData('');
    setTextarea('');
  }

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/photo">Photo</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">SignUp</Link>
          </li>
        </ul>
        <Outlet />
        </section>

        <div id="myForm">
          <h3>let's talk business...</h3>
          <form onSubmit={handleSubmit}>

            <input type="text" name="Name" value={data.Name} placeholder="Name" required onChange={handleChange}/>

            <input type="email" name="Email" value={data.Email} placeholder="Email" required  onChange={handleChange}/>

            <input type="text" name="Subject" value={data.Subject} placeholder="Subject" onChange={handleChange}/>

            <textarea value={textarea} placeholder="write something.." onChange={handleTextarea}></textarea>

            <button type="submit"> <i class="fa-solid fa-paper-plane"></i> SEND MESSAGE</button>

            <p id="sign">
              <a href="sign-up" >SignUp</a> 
              <a href="login" >Login</a>
            </p>
          </form>
        </div>
      </div>

      <div className="media">
        <section id="media" >
          <a href="github" ><i class="fa-brands fa-github"></i></a>
          <a href="" ><i class="fa-brands fa-linkedin"></i></a>
          <a href="" ><i class="fa-brands fa-x-twitter"></i></a>
          <a href="" ><i class="fa-brands fa-discord"></i></a>
          <a href="" ><i class="fa-brands fa-facebook"></i></a>
        </section>
        <p><b>&copy; 2024.</b> All rights reserved</p>
        <p>Photo Tech Hub version 1.0.0</p>
      </div>
    </div>
  )
}
export default Contacts;