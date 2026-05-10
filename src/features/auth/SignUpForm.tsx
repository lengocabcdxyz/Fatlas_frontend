import { useState } from 'react'
import { signUpWithEmailPassword } from './api'
import './SignUpForm.css'
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = async () => {
    try {
      await signUpWithEmailPassword(email, password)
      console.log('Sign up success')
    } catch (err: any) {
      console.error(err.message)
    }
  }

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">Sign Up</h1>

        <p className="subtitle">
          Sign up for free to access to any of our products
        </p>

        <label className="label">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>

        <div className="passwordWrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button
          className="button"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="footer">
          Already have an account?{" "}
          <Link to="/signin" className="link">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}