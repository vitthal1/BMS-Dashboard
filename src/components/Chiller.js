import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>(
  {
table: {
  margin: '10px 10px',
},
  tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth:1250
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.info.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  avatar: {
      backgroundColor: theme.palette.Paper,
      color: theme.palette.getContrastText(theme.palette.primary.light),
      padding: 2,
      marginLeft: theme.spacing(2),
  },
  name: {
      fontWeight: 'bold',
      color: theme.palette.warning.light
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  },
  nav1: {
      display: 'flex',
      justifyContent: 'flex-start',
      listStyle: 'none',
      padding: 2,
      marginLeft: theme.spacing(2),     
    },
  
}));

export default function Chiller() {
  const classes = useStyles();
  const [data, setData] = useState([]);  // Declare state variable to store data from API
  const [headers, setHeaders] = useState([]);  // Declare state variable to store header names
  // const [search, setSearch] = useState('');
  // const handleSearchChange = (event) => {
  //   if (event.target.value === '') {
  //     setSearch('');
  //   } else {
  //     setSearch(event.target.value);
  //   }
  // };

  // async function fetchData() {
  //   const response = await axios.get('https://glenmarklive.onrender.com/chiller');  // Replace with the URL of your API
  //   setData(response.data);  // Set the data in state
  //   setHeaders(Object.keys(response.data[0]));  // Set the header names in state
  // }
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://glenmarklive.onrender.com/getSwitchSummary');  // Replace with the URL of your API
      setData(response.data);  // Set the data in state
      setHeaders(Object.keys(response.data[0]));  // Set the header names in state
    }
    fetchData();  // Call the function to fetch the data
  }, []);  // The empty array ensures that the effect is only run on mount

return (
<>
<Header/>
<TableContainer className={classes.tableContainer}>
  <Table className={classes.table} aria-label="simple table">
    <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell className={classes.tableHeaderCell} 
            key={header} 
                        //  hidden={header === 'Active'
            hidden={['Active','MeterType','SwitchStatus'].includes(header)}>
                          {header}
            </TableCell>  // Render each header name
             ))}
          </TableRow>
    </TableHead>
  <TableBody>
  {data.map((row) => (
    <TableRow key={row.id}>  
    {headers.map((header) => (
      <>
        <TableCell  key={header} hidden={['Active', 'MeterType', 'SwitchStatus'].includes(header)}>{row[header]}</TableCell>             
        <TableCell><span className={header['RA Set Temp']>'21'? "text-success":"text-center"} >{header['SA %RH']}</span></TableCell> 
      </>          
    ))}
    </TableRow>  
  ))}  
  </TableBody>
  </Table>
  </TableContainer> 
  <Footer/>
</>
);}
