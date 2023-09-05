import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    marginLeft: theme.spacing(2), 
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-start',
    listStyle: 'none',
    padding: 2,
    marginLeft: theme.spacing(2), 
  
  },
  navItem: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(2),
    },
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.med}>
    <nav >
      <ul className={classes.nav}>
       <Button variant="contained" className={classes.navItem}><Link to="/">Home</Link></Button>
        <Button variant="contained" className={classes.navItem} ><Link to="/alerts">Alerts</Link></Button>
        <Button variant="contained" className={classes.navItem}><Link to="/reports">Reports</Link></Button>
        <Button variant="contained" className={classes.navItem}> <Link to="/settings">Settings</Link></Button>
        <Button variant="contained"  className={classes.navItem}> <Link to="/contact">Support</Link></Button>
        <Button variant="contained" className={classes.navItem}><Link to="/about">About</Link></Button> 
      </ul>
    </nav>
    <Outlet/>
    </div>
 </>
      
  );
};

export default Header;
