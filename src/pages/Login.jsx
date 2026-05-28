import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-surface p-6 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto space-y-8">

        {/* Header */}
        <div>
          <h2 className="mt-6 text-3xl font-bold text-textPrimary">
            Welcome to<br/>Vizag Schools
          </h2>
          <p className="mt-2 text-sm text-textSecondary">
            Enter your mobile number to continue
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textSecondary mb-1.5">Mobile Number</label>
              <div className="flex relative shadow-sm rounded-interactive border border-slate-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                <span className="inline-flex items-center px-4 bg-slate-50 border-r border-slate-200 text-slate-500 sm:text-sm font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  className="flex-1 block w-full py-3 px-4 focus:outline-none bg-white sm:text-sm"
                  placeholder="98765 43210"
                />
              </div>
            </div>
          </div>

          <div>
            <Button type="submit" variant="teal" size="lg" className="w-full">
              Send OTP
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-surface text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Auth */}
        <div>
          <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-200 rounded-interactive bg-white text-sm font-medium text-textPrimary hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
