import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Slider } from '@material-ui/core';
import axios from 'axios';
import KeyboardDatePicker from '@material-ui/pickers/KeyboardDatePicker';





const useStyles = makeStyles({
  card: {
    width: '300px',
    height: '150px',
  },
});

function Pills() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://my-api.com/data').then(response => {
      setData(response.data);
    });
  }, []);

  const pills = data.map((item, index) => (
    <Card key={index} className={classes.card}>
      {item.name}
    </Card>
  ));

  return (
    <Slider>
      {pills}
    </Slider>
  );
}

export default Pills;
