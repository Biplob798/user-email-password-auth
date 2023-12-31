import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");

  const [registerError, setRegisterError] = useState("");

  const [seePassword, setSeePassword] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
   
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name,email, password, accepted);

    // reset error

    setRegisterError("");

    // reset success

    setSuccess("");

    if (password.length < 6) {
      setRegisterError("longer 6 word");

      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("you must add a chapital letter");
      return;
    } else if (!accepted) {
      setRegisterError("please accepted our terms and condition");
      return
    }

    // create user ---(premiss)

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("success !!");

        // update profile 

        updateProfile(result.user,{
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then( () => console.log('profile updated'))
        .catch()


        // send verification email 

        sendEmailVerification(result.user)
        .then(() =>{
         alert('please check your email and verify you email')
        })

      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="border p-6">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            type="text"
            name="name"
            placeholder="Your Name"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            placeholder="email address"
            id=""
            required
          />
          <br />

          <div className="relative border mb-4">
            <input
              className=" w-full py-2 px-4"
              type={seePassword ? "text" : "password"}
              name="password"
              placeholder="your password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-4"
              onClick={() => setSeePassword(!seePassword)}
            >
              {seePassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="mb-3" htmlFor="terms">
              Accept our <a href=""></a> terms and conditions
            </label>
          </div>
          <br />
          <input
            className="btn btn-primary mb-4 w-full py-2 px-4"
            type="submit"
            value="Register"
            id=""
          />
        </form>
        {registerError && <p className="text-blue-700">{registerError}</p>}
        {success && <p className="text-gray-800">{success}</p>}

        <p>Already have a account ? please <Link className="text-xl text-red-900" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
