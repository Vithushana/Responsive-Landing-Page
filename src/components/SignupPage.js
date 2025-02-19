import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom'; // Import Link

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #85A98F;
`;

const SignupForm = styled.div`
  background: white;
  border-radius: 8px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

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

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #28a745;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #218838;
  }
`;

const RedirectLink = styled.div`
  text-align: center;
  margin-top: 15px;

  a {
    text-decoration: none;
    color: #28a745;
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

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic for handling form data, such as sending it to your API.

    // Redirect to the login page after successful signup
    alert(`Welcome, ${formData.name}! Your account has been created.`);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <SignupContainer>
      <SignupForm>
        <h2>Sign Up for Garbage Management</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
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
