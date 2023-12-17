import React, { Component } from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <div className="input-container">
        <input type="email" placeholder="Email" />
      </div>
      <button>Reset Password</button>
      <p>Remember your password? <a href="/login">Log in</a></p>
    </div>
  );
};

export default ForgotPassword;
