import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>(
{
  table: {
       margin: '10px 10px',
  },
  tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      fontSize: "14px",
      backgroundColor: '#388e3c',
      fontFamily:'Roboto'
      
  },
  tableRowCell: {
    fontWeight: 'bold',
    fontSize: "14px",
    backgroundColor: '#9ccc65'
   
},
  freezeCell: {
    position: "sticky",
    left: 0,
    backgroundColor: "#64dd17",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily:'Roboto'

  },
  freezeCell1: {
    position: "sticky",
    left: 0,
    backgroundColor: "#388e3c",
    fontSize: "14px",
    fontWeight: "bold",

  },

  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "0px",
    alignItems: "center",
    color:"#33691e",
    marginLeft:"24px"
  },
  
}));

export default function Settings() {
  const classes = useStyles();
  const [data, setData] = useState([]);  // Declare state variable to store data from API
  const [headers, setHeaders] = useState([]);  // Declare state variable to store header names
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    if (event.target.value === '') {
      setSearch('');
    } else {
      setSearch(event.target.value);
    }
  };
  const filteredData = data.filter((row) => {
    return Object.values(row).join('').toLowerCase().includes(search.toLowerCase());
  });
  
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
  <h3 className={classes.header}>Settings Summary Glenmark Nashik</h3>
  <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell className={header === 'MeterSerial' | header==='Location'? classes.freezeCell1 : classes.tableHeaderCell }
                         key={header} 
                        //  hidden={header === 'Active'
                         hidden={['SwitchId','Active','MeterType','SwitchStatus'].includes(header)}>
                          {header}
              </TableCell>  // Render each header name
             ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>  
              {headers.map((header) => (
                <>
                <TableCell  key={header}  className={header === 'MeterSerial' | header==='Location' ? classes.freezeCell : classes.tableRowCell} hidden={['SwitchId','Active', 'MeterType', 'SwitchStatus'].includes(header)}>{row[header]}</TableCell>             
                {/* <TableCell><span className={header['RA Set Temp']>'21'? "text-success":"text-center"} >{header['SA %RH']}</span></TableCell> */}
                </>          
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  <Footer/>
</>
);
}
