import React,{useEffect,useState} from 'react';
import axios from "axios";
import _ from "lodash";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet, Link } from 'react-router-dom';
import Loading from './Loading';
import { Button } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
// import MaterialTable from "material-table"
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

 const useStyles = makeStyles((theme) => ({
    table: {
    //   minWidth: 650,
    },
    tableContainer: {
        borderRadius: 5,
        margin: '5px 5px',
       
  },
    tableHeaderCell: {
        fontWeight: 'bold',
        fontSize:'14px',
        backgroundColor:'#01579b',
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    tableCell: {
        backgroundColor: "#448aff",
        fontSize:'14px'
    },
    tableRowCell: {
        fontWeight: 'bold',
        FontSize:'14px'
    },
    avatar: {
        backgroundColor: theme.palette.Paper,
        color: theme.palette.getContrastText(theme.palette.primary.light),
        padding: 2,
        marginLeft: theme.spacing(2),
    },
    freezeCell: {
        position: "sticky",
        left: 0,
        backgroundColor: "#0277bd",
        fontSize: "14px",
        fontWeight: "bold",
    
      },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '2px 2px',
        display: 'inline-block'
    },
    nav1: {
        display: 'responsive',
        // justifyContent: 'flex-start',
        listStyle: 'none',
        padding: 2,
        marginLeft: theme.spacing(2), 
      },
    customButton: {
        padding: '5px',   
        fontWeight: 'bold',
        fontSize:'15px',
        BackgroundColor: '#0091ea',
        margin:'5px',
        color: "#2979ff",
        padding: "10px 20px",
        borderRadius: "20px",
       
           "&:hover": {
            backgroundColor: "#0091ea"
            },
            "&:active": {
            transform: "scale(0.95)"
            }
        },
    }));

const pageSize=45;
const Home = () => {
const [posts, setposts] = useState([]);
const [ndata, setndata] = useState([]);
const [paginated,setpaginated]=useState();
const [currentPage, setcurrentPage] = useState();

const classes = useStyles();

useEffect(() => {
    var config = {
    url: 'https://glenmarklive.onrender.com/Live',
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    },
    // withCredentials: false,
    };
    axios(config).then(function (res) {
    console.log(JSON.stringify(res.data));
    setposts(res.data);
    setpaginated(_(res.data).slice(0).take(pageSize).value())
         })
 },
 [])

useEffect(() => {
    var config1 = {    
    url: 'https://glenmarklive.onrender.com/summary',
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    },
    // withCredentials: false,
    };
    axios(config1).then(function (res) {
    console.log(res.data);
    setndata(res.data);
    })
 },
 [])
 
//pagecountsetting
const pageCount = posts ?Math.ceil(posts.length/pageSize):0;
if (pageCount===1) return null;
const pages = _.range(1,pageCount+1);

const pagination=(pageNo)=>
    {
    setcurrentPage(pageNo);
    const startIndex=(pageNo-1)*pageSize;
    const paginationPost = _(posts).slice(startIndex).take(pageSize).value();
    setpaginated(paginationPost)
    };

return (
   <>
    <div>     
       <div className="px-md-2">
         <Header/>
          <hr/>
          <ul>
          <Button className={classes.customButton}>Glenmark Nashik Utilities</Button>
          <Button><Link className={classes.customButton} to="/chiller">Air Handling Units</Link></Button>
          <Button><Link className={classes.customButton} to="/chiller">Chiller</Link></Button>
          <Button><Link className={classes.customButton} to="/chiller">Pumps</Link></Button>
          <Button><Link className={classes.customButton} to="/chiller">BTU</Link></Button>
          </ul>
          <hr/>
        {/* <button id="reload-button">Reload</button> */}
        <Paper>
            {/* options={{ filtering:true}}, */}
       <TableContainer className={classes.tableContainer}>
       <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.tableHeaderCell}>Utility</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                    <TableCell className={classes.tableHeaderCell}>RA Temp</TableCell>
                    <TableCell className={classes.tableHeaderCell}>RA %RH</TableCell>
                    <TableCell className={classes.tableHeaderCell}>RA Set Temp</TableCell>
                    <TableCell className={classes.tableHeaderCell}>SA %RH</TableCell>
                    <TableCell className={classes.tableHeaderCell}>SA DPT</TableCell>
                    <TableCell className={classes.tableHeaderCell}>SA DPT Set</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Update SADPT Set</TableCell>
                    <TableCell className={classes.tableHeaderCell}>TxnDate</TableCell>
                    <TableCell className={classes.tableHeaderCell}>TxnTime</TableCell>
                    <TableCell className={classes.tableHeaderCell}>ID</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Comp1 Set</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Comp2 Set</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Trip Status</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Air Flow</TableCell>
                    <TableCell className={classes.tableHeaderCell}>Kwh AHU</TableCell>
                    <TableCell className={classes.tableHeaderCell}>RA Set</TableCell>    
                </TableRow>
            </TableHead>
      <>      
        {!paginated ? (
        <>
        {ndata ?( 
        <Loading/>
        ):(
        <p>{ndata[0]} "Units"</p>
        )
        }
        </>
        ):(   
            <TableBody>
                {
                    paginated.map((post,index)=>(
                        <TableRow  className={classes.tableRowCell} key={index}>
                            <TableCell className={classes.freezeCell}>{post.UtilityName}</TableCell>
                            <TableCell className={classes.tableCell}>{post.LocationName}</TableCell>
                            <TableCell className={classes.tableCell}><p className={post['Unit Status F/B']==='1' ? "bg-success text-white text-center":"bg-danger text-white"}>{post['Unit Status F/B']==='1'?<span className="text-bold text-md-right">On</span>:<span ClassName="text-md-left">Off</span>}</p></TableCell>
                            <TableCell className={classes.tableCell}><p className={post['RA Temp']>'25'& post['Unit Status F/B']==='1' ? "text-danger font-weight-bold":"text-dark"}>{post["RA Temp"]}</p></TableCell>
                            <TableCell className={classes.tableCell}><p className={post['RA Humidity']>'60'& post['UtilityName'].includes('CCH') ? "text-danger font-weight-bold":"text-dark"}>{post["RA Humidity"]}</p></TableCell>
                            <TableCell className={classes.tableCell}>{post["RA Set Temp"]}</TableCell>
                            <TableCell className={classes.tableCell}><span className={post['RA Humidity']>'95'? "text-success":"text-center"}>{post['SA %RH']}</span></TableCell>
                            <TableCell className={classes.tableCell}>{post["SA DPT"]}</TableCell>
                            <TableCell className={classes.tableCell}><p className={post['RA Temp']<='21'&post['SA DPT']>post['SA DP Set temp']& post['Unit Status F/B']==='1'& (post['UtilityName'].includes('CCH')|post['UtilityName'].includes('CCD')) ? "bg-success font-weight-bold":""}>{post['SA DP Set temp']}</p></TableCell>
                            <TableCell className={classes.tableCell}><p className={post['SA DPT']>'1'&post['RA Temp']<='21'&post['SA DPT']>post['SA DP Set temp']& post['Unit Status F/B']==='1'& (post['UtilityName'].includes('CCH')|post['UtilityName'].includes('CCD')) ? "font-weight-bold":"text-white"}><p className="text-bold">{ Math.round(post['SA DPT']-post['SA DP Set temp']) }</p></p></TableCell>
                            <TableCell className={classes.tableCell}>{post["TxnDate"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["TxnTime"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["MeterSerial"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post[" Comp1 Set Temp"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["Comp2 Set Temp"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["Trip Status"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["Air FLow"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["KW AHU"]}</TableCell>
                            <TableCell className={classes.tableCell}>{post["RA Set Temp"]}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
    )}
    </>
      </Table>
        </TableContainer>
        </Paper>
        </div> 
        </div>
        
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {
                 
                 pages.map((page)=>  <li className={page===currentPage?"page-item active":"page-item"}><p className="page-link" onClick={()=>pagination(page)}> { page } </p></li> )
               
                }
            </ul>
        </nav>
        <Footer/>
   </>
         );
         
};


export default Home;
