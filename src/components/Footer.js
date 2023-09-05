import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0.5,
  },
  navItem: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <nav>
        <ul className={classes.nav}>
          <li className={classes.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className={classes.navItem}>
            <Link href="/terms-of-use">Terms of Use</Link>
          </li>
        </ul>
      </nav>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

export default Footer;
