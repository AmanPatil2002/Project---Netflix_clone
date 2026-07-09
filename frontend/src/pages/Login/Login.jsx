import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [signState, setSignState] = useState("Sign In")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
  e.preventDefault()
  setError("")

  const endpoint =
    signState === "Sign Up"
      ? "http://127.0.0.1:8000/api/register/"
      : "http://127.0.0.1:8000/api/login/"

  const payload =
    signState === "Sign Up"
      ? { name, email, password }
      : { email, password }

  try {
    const response = await axios.post(endpoint, payload)
    console.log("Success:", response.data)

    if (signState === "Sign In") {
      //  Login successful
      localStorage.setItem("token", response.data.token)
      navigate("/home")
    } else {
      //  Registration successful → switch to Sign In
      alert("Registration successful! Please sign in now.")
      setSignState("Sign In")
      setEmail("")
      setPassword("")
      setName("")
    }

  } catch (err) {
    console.error(" Error:", err)
    setError("Something went wrong")
  }
}


  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="login-logo"
      />

      <div className="login_container">
        <h1>{signState}</h1>

        <form className="login_form" onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              className="login_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="login_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login_button">
            {signState}
          </button>

          {error && <p className="error-text">{error}</p>}

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
              <p>Need Help?</p>
            </div>
          </div>
        </form>

        {signState === "Sign In" ? (
          <p className="form-help">
            New to Netflix?{" "}
            <span onClick={() => setSignState("Sign Up")}>Sign Up now.</span>
          </p>
        ) : (
          <p className="form-help">
            Already have an account?{" "}
            <span onClick={() => setSignState("Sign In")}>Sign In</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
