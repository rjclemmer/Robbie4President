// Create a react component that inputs a textarea mes
import React, { useState } from 'react';


function Ask() {
 const [message, setMessage] = useState('')
 const [response, setResponse] = useState('');

 const handleSubmit = (e) => {
e.preventDefault();
fetch('http://localhost:3001/', { 
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ message }),
})
.then((res) => res.json())
.then((data) => setResponse(data.message));
 };
 return (
    <div className="App bg-slate-600">
    <form onSubmit={handleSubmit}>
    <textarea
    className='w-1/2 h-[100px]'
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    <button className='text-white' type="submit">Submit</button>
    </form>
    <div className='text-white'>{response}</div>
    </div>
 );
}

export default Ask