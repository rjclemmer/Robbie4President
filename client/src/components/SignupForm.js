import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
      alert("signup successful")
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <div className="mb-3">
  <label htmlFor="name">Name</label>
  <input
    className="w-full h-6 pl-1 py-0.5 mt-1 border border-gray-500"
    type="text"
    name="name"
    placeholder="Your name"
    onChange={handleInputChange}
    value={userFormData.name}
    required
  />
</div>

<div className="mb-3">
  <label htmlFor="email">Email</label>
  <input
    className="w-full h-6 pl-1 py-0.5 mt-1 border border-gray-500"
    type="email"
    name="email"
    placeholder="Your email"
    onChange={handleInputChange}
    value={userFormData.email}
    required
  />
</div>

<div className="mb-3">
  <label htmlFor="password">Password</label>
  <input
    className="w-full h-6 pl-1 py-0.5 mt-1 border border-gray-500"
    type="password"
    name="password"
    placeholder="Your password"
    onChange={handleInputChange}
    value={userFormData.password}
    required
  />
</div>

        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
