import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
<>
  <Header/>
  <Container>
   
    <Typography variant="h4" component="h1">
      <p>About This</p>
    </Typography>
    <Typography variant="body1" paragraph>
     All Rights are Reserved with @Protech Progressive Technologies
    </Typography>
   
  </Container>
  <Footer/>
</>
    );
};

export default About;

