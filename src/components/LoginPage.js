import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // For navigating to the SignUp page

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #28a745;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }
`;

const SignUpLink = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;

  a {
    color: #28a745;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please enter both email and password');
    } else {
      // Call login API or handle login logic here
      setError('');
      alert('Logged in successfully!'); // This should be replaced with actual login logic
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <Heading>Login</Heading>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
        <SignUpLink>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </SignUpLink>
      </LoginContainer>
    </LoginSection>
  );
};

export default LoginPage;
