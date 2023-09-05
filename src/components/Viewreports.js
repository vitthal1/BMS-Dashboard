import React, { useState } from 'react';
import axios from 'axios';

const Viewreports = () => {
  const [formData, setFormData] = useState({});
  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/submit-form', formData)
      .then(res => {
        setApiResponse(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {apiResponse &&
        <div>
          <h3>Response from API:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      }
    </>
  );
}

export default Viewreports;
