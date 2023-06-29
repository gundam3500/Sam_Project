import React, { useState } from 'react';

const PasswordProtection = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the entered password is correct
    const enteredPassword = password.trim();
    if (enteredPassword === 'your-password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (isAuthenticated) {
    // Render the actual website content if authenticated
    return <div> Success! Welcome to Sydney Recipe </div>;
  }         

  // Render the password prompt if not authenticated
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Enter</button>
    </form>
  );
};

export default PasswordProtection;
