const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/api/submit-form', (req, res) => {
  const formData = req.body;

  // send form data to third-party API
  axios.post('127.0.0.1:8000/Transdata', formData)
    .then(apiRes => {
      res.json({
        message: 'Form data successfully submitted',
        data: apiRes.data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error submitting form data',
        error: err
      });
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
