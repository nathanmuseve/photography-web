import "./SignUp.css";
function SignUp() {
  return (
    <div className="signUp">
      <h1>Registration Form</h1>
      <p>Please fill in the form below to register your details. Note that all fields marked <span>*</span> must be filled before submission</p>
      <hr />
      <form>
        <label htmlFor="lname">LastName <span>*</span></label>
        <input type="text" id="lname" name="LastName" placeholder="Last Name" required />

        <label htmlFor="midname">MiddleName <span>*</span></label>
        <input type="text" id="midname" name="MiddleName"  placeholder="Middle Name" required/>

        <label htmlFor="fname">FirstName <span>*</span></label>
        <input type="text" id="fname" name="FirstName"  placeholder="First Name" required/>

        <label htmlFor="location">Location City <span>*</span></label>
        <select type="radio" id="location" name="Location" >
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Other"><span>Specify:</span></option>
        </select>

        <label htmlFor="dob">DateofBirth <span>*</span></label>
        <input type="date" id="dob" name="DateofBirth"   required/>

        <label htmlFor="tel">Tel no</label>
        <input type="number" id="tel" name="Telno" min="0" max= '10'  />

        <label htmlFor="email">Email <span>*</span></label>
        <input type="email" id="email" name="Email"  placeholder="Email" required />

        <label htmlFor="username">Username <span>*</span></label>
        <input type="text" id="username" name="Username" placeholder="username" required />

        <label htmlFor="psw">Password <span>*</span></label>
        <input type="password" id="psw" name="Password" value  required/>

        <label htmlFor="psw">Re-type password <span>*</span></label>
        <input type="password" id="psw" name="Password" value  required/>

        <input type="checkbox" value  required/> By clicking you agree to Photo Tech Hub <a href="#terms" >Terms and Conditions <span>*</span></a>
        
        <div className="dflex2">
          <button type="submit">Conform Registration</button>
          <button>cancel</button>
        </div>
        <p>Have an Account? <a href="login">Login</a></p>

      </form>
    </div>
  );
}
export default SignUp;