import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, KeyRound, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation would go here
    console.log('Login attempt:', { loginMethod, email, password, otp });
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card">
        <h1 className="heading">Welcome Back</h1>
        <p className="subheading">Securely login to your account using your preferred method.</p>

        <form onSubmit={handleSubmit}>

          <div className="radio-options">
            <input
              type="radio"
              id="method-password"
              name="loginMethod"
              value="password"
              className="radio-input"
              checked={loginMethod === 'password'}
              onChange={() => setLoginMethod('password')}
            />
            <label htmlFor="method-password" className="radio-label">Password</label>

            <input
              type="radio"
              id="method-otp"
              name="loginMethod"
              value="otp"
              className="radio-input"
              checked={loginMethod === 'otp'}
              onChange={() => setLoginMethod('otp')}
            />
            <label htmlFor="method-otp" className="radio-label">Email OTP</label>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                className="form-input has-icon"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="input-icon" size={20} />
            </div>
          </div>

          {loginMethod === 'password' ? (
            <div className="form-group animate-in">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input has-icon"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <EyeOff
                    className="input-icon clickable"
                    size={20}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="input-icon clickable"
                    size={20}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="form-group animate-in">
              <label className="form-label" htmlFor="otp">One-Time Password</label>
              <div className="input-wrapper">
                <input
                  id="otp"
                  type="text"
                  className="form-input has-icon"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <KeyRound className="input-icon" size={20} />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Sign In <ArrowRight size={18} />
          </button>

          <div className="auth-link">
            Don't have an account? <Link to="/register">Create one here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
