import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h1>404</h1>
        <p>Not Found</p>
        <button onClick={()=> navigate(-1)}></button>
    </div>
  );
}
export default NotFound;
