import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backgroundImage from '../exp_img/home.jpeg';
import logoImage from '../images/logo.png'; // Import your logo
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa'; // Import icons

const SignupContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const SignupForm = styled.div`
  background: white;
  margin-top: 100px;
  border-radius: 12px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 120px; /* Adjust logo size */
    margin-bottom: 20px;
  }

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  input {
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 16px;
    width: 100%;
  }

  svg {
    color: #aaa;
    margin-right: 10px;
  }
`;

const Input = styled.input``;

const Button = styled.button`
  padding: 12px 20px;
  background-color: rgb(43, 83, 141);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: rgb(25, 48, 83);
  }
`;

const RedirectLink = styled.div`
  text-align: center;
  margin-top: 15px;

  a {
    text-decoration: none;
    color: rgb(43, 83, 141);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}! Your account has been created.`);
    navigate('/login');
  };

  return (
    <SignupContainer>
      <SignupForm>
        <img src={logoImage} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name"></Label>
            <InputWrapper>
              <FaUser />
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </div>
          <div>
            <Label htmlFor="email"></Label>
            <InputWrapper>
              <FaEnvelope />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </div>
          <div>
            <Label htmlFor="phone"></Label>
            <InputWrapper>
              <FaPhone />
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </div>
          <div>
            <Label htmlFor="password"></Label>
            <InputWrapper>
              <FaLock />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <RedirectLink>
          Already have an account? <Link to="/login">Login here</Link>
        </RedirectLink>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;
