import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import backgroundImage from '../exp_img/home.jpeg';
import logo from '../images/logo.png';

const fadeInSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LoginSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url(${backgroundImage});
background-size: cover;
background-position: center;
position: relative; /* Needed for overlay */

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay with 50% opacity */
}

> * {
  position: relative; /* Ensure child elements are above the overlay */
  z-index: 1;
}
`;


const LoginContainer = styled.div`
  background-color: #ffffff;
  margin-top: 100px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  animation: ${fadeInSlideDown} 0.8s ease-in-out; /* Apply animation */
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 78%;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #777;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 40px; /* Adjusted padding for icon */
  border-radius: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: rgb(43, 83, 141);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: rgb(43, 83, 141);
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(24, 47, 83);
  }
`;

const SignUpLink = styled.p`
  font-size: 14px;
  margin-top: 20px;

  a {
    color: rgb(43, 83, 141);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'vithu' && password === 'vithu') {
      setIsLoggedIn(true);
      navigate('/'); // Redirect to Features page
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <Logo src={logo} alt="Logo" />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <InputContainer>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <Button type="submit">Login</Button>
        </form>
        <SignUpLink>
          Forgot Password? <Link to="/reset">Click Here</Link>
        </SignUpLink>
      </LoginContainer>
    </LoginSection>
  );
};

export default LoginPage;
