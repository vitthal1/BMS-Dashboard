import Header from './Header';
import Footer from './Footer';
import Loading from './Loading'
import Vreport from './Vreport'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Container: {
      marginTop: theme.spacing(2),
  },
}));

function Reports() {
    const classes = useStyles();
    const [FromDate, setFromDate] = useState(null);
    const [ToDate, setToDate] = useState(null);
    const [data, setData] = useState([]);
    const [reportdata, setReportData] = useState([]);
    const [columns, setColumns] = useState(null);
    // useEffect(() => {
    //   const yesterday = new Date();
    //   yesterday.setDate(yesterday.getDate() - 1);
    //   const fDate = yesterday.toISOString().substring(0, 10);
    //   const tDate = yesterday.toISOString().substring(0, 10);
    //   setFromDate(fDate);
    //   setToDate(tDate);
    //   // handleSubmit(fDate,tDate)
    // }, []);
    console.log(FromDate)
    const handleSubmit = (event) => {
        event.preventDefault();
        const fDate = FromDate.split('/').reverse().join('-');
        const tDate = ToDate.split('/').reverse().join('-');
        console.log(fDate)
        console.log(FromDate)
        var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
        var raw = JSON.stringify({
            "fromDate": fDate,
            "toDate": tDate
          });
          
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
fetch("https://glenmarklive.onrender.com/DailyData", requestOptions)
  .then(response => response.json())
  .then(data => {
    setReportData(data);
    console.log("Result");
    console.log(data);
  })
  .catch(error => console.log('error', error));
          
    //     fetch("https://glenmarklive.onrender.com/DailyData", requestOptions)
    //         .then(response =>{
    //           setReportData(data);
    //         } )
    //         .then(result => {
    //           console.log("Result");
    //           console.log(result);
              
    //         })
    //         .catch(error => console.log('error', error));
    //
   }

    return (
      <>
      <Header/>
      <form onSubmit={handleSubmit} className="card card-flex mx-5 my-5">
      <div className="form-group px-5 py-5">
      <h1 className=" text-sucess font-weight-bold">View Report</h1>
      <h6 className="text-danger font-italic">Enter Date Range to view report</h6>
      <hr/>
      <div className="mb-3 px-5">
        <label className="cols-sm-2 col-form-label">From Date:</label>
        <input
          type="date"
          // value={FromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3 px-5">
        <label>To Date:</label>
        <input
          type="date"
          // value={ToDate}
          onChange={(e) => setToDate(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" 
              className="btn btn-warning mb-3 cols-sm-6 px-4 py-8 btn-outlined"
              onClick={handleSubmit}>
              Submit
      </button>
      </div>
  </form>
  {reportdata ?( <Vreport/>
        ):(
          <Loading/> 
          )}
  <Footer/>    
  </>
);
}

export default Reports;