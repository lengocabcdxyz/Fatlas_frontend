import { useState } from 'react'
import { loginWithEmailPassword, loginWithGoogle } from './api'
import './SignUpForm.css'
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    const res = await loginWithEmailPassword(email, password)

    if (res.error) {
      console.error('Login failed:', res.error)
      return
    }

    console.log('Login success:', res.data)
  }

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">Login</h1>

        <p className="subtitle">
          Login to continue using your account
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
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Login
        </button>

        <button
          className="button"
          onClick={loginWithGoogle}
          style={{ marginTop: '10px', background: '#fff', color: '#000', border: '1px solid #ccc' }}
        >
          Login with Google
        </button>

        <p className="footer">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}