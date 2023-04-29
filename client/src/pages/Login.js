// see SignupForm.js for comments

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import redFoosball from '../assets/images/redFoosball.webp'
import blueDog from '../assets/images/blueDog.webp'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import NavbarHome from '../components/NavbarHome';

const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
      alert('You are logged in!')
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col justify-center py-8 px-8 mx-8 mt-4 mb-8 bg-[#2B2A64] text-center md:mx-32 lg:mx-[30%] lg:mb-10">
      <h1 className="text-white text-3xl font-bold mb-3">WELCOME BACK</h1>
        
      
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group className='mb-3'>
            {/* <Form.Label htmlFor="email">Email</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="EMAIL"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3'>
            {/* <Form.Label htmlFor="password">Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="PASSWORD"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <button
          className='text-white bg-[#C0504D] w-full p-2 font-bold hover:opacity-90'
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
          >
            LOGIN
          </button>
          {/* <Button
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
          >
            Submit
          </Button> */}
          <div className='flex justify-center w-full'>
           <p className={`w-full text-xs tracking-wider text-white my-2`}>We're thrilled to see you return to the Robbie for President 2024 campaign website! Your passion, dedication, and unwavering support are what drive our mission to code a better America. As a valued member of our online community, you play a crucial role in our journey toward a brighter, more compassionate, and technologically advanced nation.</p>
          </div>
        </Form>
      </div>

      <div className='hidden lg:flex lg:w-full lg:justify-between lg:items-center lg:mb-8'>
        <img className='w-[380px]' src={redFoosball} alt="" />
        <p className='text-[#2B2A64] text-3xl font-bold text-center'>SUPPORT THE<br/>MOVEMENT</p>
        <img className='w-[380px]' src={blueDog} alt="" />
      </div>

      <div className="">
        <Footer />
      </div>

    </>
  );
};

export default LoginForm;
