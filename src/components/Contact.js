import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
  <>
   <Header/>
     <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Name" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      <TextField id="message" label="Message" variant="outlined" multiline rows={4} />
      <Button variant="contained" color="primary">Submit</Button>
    </form>
   <Footer/>
  </>   
  );
};

export default Contact;
