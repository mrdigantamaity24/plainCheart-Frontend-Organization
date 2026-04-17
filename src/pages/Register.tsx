import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt with email:', email);
  };

  const handleOAuth = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card">
        <h1 className="heading">Create Account</h1>
        <p className="subheading">Join us to start managing your projects beautifully.</p>

        <div className="social-buttons">
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => handleOAuth('Google')}
          >
            {/* Simple inline SVG for Google since Lucide doesn't have a colored one */}
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
          
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => handleOAuth('GitHub')}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.6a5.44 5.44 0 0 0-1.5-3.8 5.07 5.07 0 0 0-.15-3.7s-1.17-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.27 2.3 5.1 2.68 5.1 2.68a5.07 5.07 0 0 0-.15 3.7A5.44 5.44 0 0 0 3.5 10.16c0 5.07 3 6.26 6 6.6a4.8 4.8 0 0 0-1 3.24v4"></path>
              <path d="M5 20c-3 0-3-3-5-3"></path>
            </svg>
            Sign up with GitHub
          </button>
        </div>

        <div className="divider">Or register with email</div>

        <form onSubmit={handleRegister}>
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

          <button type="submit" className="btn btn-primary">
            Continue with Email <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-link">
          Already have an account? <Link to="/login">Sign in here</Link>
        </div>
      </div>
    </div>
  );
}
