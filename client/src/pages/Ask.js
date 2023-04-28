import React, { useState, useEffect } from 'react';
import { getToken } from '../utils/auth';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client/core';

const OPENAI_QUERY = gql`
  mutation OpenAIQuery($message: String!) {
    openAIQuery(message: $message) {
      response
    }
  }
`;

function Ask() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [errorMsg, setError] = useState('');
  const [openAIQuery, { data, loading, error }] = useMutation(OPENAI_QUERY);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await openAIQuery({ variables: { message } });
      setResponse(data.openAIQuery.response);
    } catch (err) {
        console.log("Error details:", err);
        setError(`Error sending message: ${err.message}`);
      }
  };

  return (
    <div className="App bg-slate-600">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-1/2 h-[100px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="text-white" type="submit">
          Submit
        </button>
      </form>
      <div className="text-white">{response}</div>
      <div className="text-red-500">{errorMsg}</div>
    </div>
  );
}

export default Ask;
