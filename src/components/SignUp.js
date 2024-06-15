function SignUp() {
  return (
    <div className="signUp">
      <h1>Registration</h1>
      <p>Please fill in the form below to register your details</p>
      <hr />
      <form>
        <label htmlFor="lname">LastName</label>
        <input type="text" id="lname" name="LastName" value />

        <label htmlFor="midname">MiddleName</label>
        <input type="text" id="midname" name="MiddleName" value />

        <label htmlFor="fname">FirstName</label>
        <input type="text" id="fname" name="FirstName" value />

        <label htmlFor="location">Location City</label>
        <select type="radio" id="location" name="Location" >
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Other"><span>Specify:</span></option>
        </select>

        <label htmlFor="dob">DateofBirth</label>
        <input type="date" id="dob" name="DateofBirth" value />

        <label htmlFor="tel">Tel no</label>
        <input type="text" id="tel" name="Telno" value />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="Email" value />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="Username" value />

        <label htmlFor="psw">Password</label>
        <input type="password" id="psw" name="Password" value />

        <label htmlFor="psw">Re-type password</label>
        <input type="password" id="psw" name="Password" value />

        <input type="checkbox" value /> By clicking you agree to Photo Tech Hub <a href="#terms" >Terms and Conditions</a>
        
        <div>
          <button type="submit">Conform Registration</button>
          <button>cancel</button>
        </div>
        <p>Have an Account? <a href="#">Login</a></p>

      </form>
    </div>
  );
}
export default SignUp;