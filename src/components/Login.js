import SignUp from "./SignUp";
function login() {
  return (
    <div className="login">
      <form className="myForm">
        <div className="dflex">
          <span><i class="fa-solid fa-user"></i></span>
          <input type="text" name="Username"value placeholder="username" required/>
        </div>

        <div className="dflex">
          <span><i class="fa-solid fa-key"></i></span>
          <input type="text" name="Password"value required />
        </div>

        <div className="dflex">
          <button type="submit">Login</button>
          <button>cancel</button>
        </div>

        <p>Don't have an Account? <button><SignUp /></button></p>
      </form>
    </div>
  );
}
export default login;