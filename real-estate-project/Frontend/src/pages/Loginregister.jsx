

// components/AuthPage.jsx
import React, { useState } from 'react';

const Loginregister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log('Login data:', { email: formData.email, password: formData.password });
    } else {
      // Handle register logic
      console.log('Register data:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-32 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding & Info */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Join thousands of satisfied customers who found their perfect property through our platform. 
            Create your account and start your real estate journey today.
          </p>
          
          {/* Features List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-[#7EC221] font-bold">✓</span>
              </div>
              <span className="text-gray-800">Access exclusive property listings</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-[#7EC221] font-bold">✓</span>
              </div>
              <span className="text-gray-800">Save your favorite properties</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-[#7EC221] font-bold">✓</span>
              </div>
              <span className="text-gray-800">Get personalized recommendations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-[#7EC221] font-bold">✓</span>
              </div>
              <span className="text-gray-800">Connect with expert agents</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Properties</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">5K+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Expert Agents</div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8">
          {/* Toggle Switch */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all duration-300 relative overflow-hidden group ${
                isLogin 
                  ? 'text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className={`relative z-10 ${isLogin ? 'text-white' : ''}`}>
                Sign In
              </span>
              {isLogin && (
                <div className="absolute inset-0 bg-black rounded-md transition-all duration-300"></div>
              )}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-all duration-300 relative overflow-hidden group ${
                !isLogin 
                  ? 'text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className={`relative z-10 ${!isLogin ? 'text-white' : ''}`}>
                Sign Up
              </span>
              {!isLogin && (
                <div className="absolute inset-0 bg-black rounded-md transition-all duration-300"></div>
              )}
            </button>
          </div>

          {/* Form Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 mb-6">
            {isLogin ? 'Sign in to your account to continue' : 'Join us today and find your dream home'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field - Only for Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Field - Only for Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password - Only for Register */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {/* Remember Me & Forgot Password - Only for Login */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#afdd51] border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-[#afdd51] hover:text-[#afdd51] font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms Agreement - Only for Register */}
            {!isLogin && (
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-[#afdd51] border-gray-300 rounded focus:ring-[#afdd51] mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <button type="button" className="text-[#afdd51] hover:text-[#afdd51] font-medium">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-[#afdd51] hover:text-[#afdd51] font-medium">
                    Privacy Policy
                  </button>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="relative bg-gray-900 text-white w-full py-4 rounded-lg font-semibold overflow-hidden group transition-all duration-300 hover:scale-105 mt-2 hover:text-black"
            >
              <span className="relative z-10">
                {isLogin ? 'Sign In' : 'Create Account'}
              </span>
              <div className="absolute inset-0 bg-[#7EC221] w-0 group-hover:w-full transition-all duration-700 ease-out origin-left"></div>
            </button>

            {/* Social Login */}
            <div className="relative flex items-center justify-center my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative bg-white px-4 text-sm text-gray-500">
                Or continue with
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="relative flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-lg font-medium overflow-hidden group transition-all duration-500 bg-black text-white hover:text-black"
              >
                <span className="relative z-10">📘</span>
                <span className="relative z-10">Facebook</span>
                <div className="absolute inset-0 bg-[#7EC221] w-0 group-hover:w-full transition-all duration-700 ease-out origin-left"></div>
              </button>
              <button
                type="button"
                className="relative flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-lg font-medium text-white hover:text-black hover:text-md overflow-hidden group transition-all duration-500 bg-black"
              >
                <span className="relative z-10">📱</span>
                <span className="relative z-10">Google</span>
                <div className="absolute inset-0 bg-[#7EC221] w-0 group-hover:w-full transition-all duration-700 ease-out origin-left"></div>
              </button>
            </div>

            {/* Switch Auth Mode */}
            <div className="text-center text-sm text-gray-600 pt-2">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#7EC221] hover:text-[#7EC221] font-semibold"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginregister;
