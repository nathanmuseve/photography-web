import { useState } from "react";
import "./SignUp.css";
import Contacts from "./Contacts";
function SignUp() {
  const [inputs, setInputs] = useState({});
  const [select, setSelect] = useState('Nairobi');
  const [password, setPassword] = useState('');

  const handleChange =(event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handlePassword =(event) =>{
    let psw = event.target.value;
    setPassword(psw)
  }

  const ClearOutPuts =(event) => {
    Array.from(event.target).forEach((e) => (e.value = " "))
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    ClearOutPuts(event)

    setInputs('');
    setSelect('Nairobi');
    setPassword('');
  }
  return (
    <div>
      <div className="signUp">
        <h1>Registration Form</h1>
        <p>Please fill in the form below to register your details. Note that all fields marked <span>*</span> must be filled before submission</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="lname">LastName <span>*</span></label>
          <input type="text" id="lname" name="LastName" value={inputs.LastName} placeholder="Last Name" required onChange={handleChange}/>

          <label htmlFor="midname">MiddleName <span>*</span></label>
          <input type="text" id="midname" name="MiddleName" value={inputs.MiddleName} placeholder="Middle Name" required onChange={handleChange}/>

          <label htmlFor="fname">FirstName <span>*</span></label>
          <input type="text" id="fname" name="FirstName" value={inputs.FirstName} placeholder="First Name" required onChange={handleChange}/>

          <label htmlFor="location">Location City <span>*</span></label>
          <select type="radio" id="location" name="Location" value={select} onChange={() => setSelect((e)=> (e.target.value)) }>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Other"><span>Specify:</span></option>
          </select>

          <label htmlFor="dob">DateofBirth <span>*</span></label>
          <input type="date" id="dob" name="DateofBirth" value={inputs.DateofBirth}   required onChange={handleChange}/>

          <label htmlFor="tel">Tel no</label>
          <input type="number" id="tel" name="Telno"  max= '10' value={inputs.Telno} onChange={handleChange}  />

          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" id="email" name="Email" value={inputs.Email} placeholder="Email" required onChange={handleChange} />

          <label htmlFor="username">Username <span>*</span></label>
          <input type="text" id="username" name="Username" value={inputs.Username} placeholder="username" required onChange={handleChange} />

          <label htmlFor="psw">Password <span>*</span></label>
          <input type="password" id="psw" name="Password" value={password}  required onChange={handlePassword}/>

          <label htmlFor="psw">Re-type password <span>*</span></label>
          <input type="password" id="psw" name="Password" value={password}  required onChange={handlePassword}/>

          <input type="checkbox" name="Terms" value={inputs.Terms}  required onChange={handleChange}/> By clicking you agree to Photo Tech Hub <a href="#terms" >Terms and Conditions <span>*</span></a>
        
          <div className="dflex2">
            <button id="bgGreen" type="submit">Conform Registration</button>
            <button id="bgRed">cancel</button>
          </div>
          <p>Have an Account? <a href="login">Login</a></p>

        </form>
      </div>
      
      <Contacts />
    </div>
  );
}
export default SignUp;