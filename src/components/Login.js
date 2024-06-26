import { useState } from "react";
import "./Login.css"
import Contacts from "./Contacts";
function Login() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser(values => ({...values, [name]:value}))
    console.log(user)
  }
  //go through every field after submitting to clear it/clear fields inputs
  function ClearOutPuts(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }
  //prevent page refresh
  const handleSubmit = (event) => {
    event.preventDefault()
    ClearOutPuts(event);
    setUser('');
    console.log(user)
  }

  return (
    <div>

      <div className="login">
        <form className="myForm" onSubmit={handleSubmit}>
          <label htmlFor="username" >username <span>*</span></label>
          <input type="text" id="username" name="Username" value={user.username} placeholder="username" required onChange={handleChange}/>

          <label htmlFor="]pswd">Password <span>*</span></label>
          <input type="password" name="Password" value={user.Password} required onChange={handleChange}/>

          <div className="dflex1">
            <button id="bgGreen" type="submit">Login</button>
            <button id="bgRed">cancel</button>
          </div>

          <p>Don't have an Account? <a href="sign-up" >SignUp</a></p>
        </form>
      </div>

      <Contacts />
    </div>
  );
}
export default Login;