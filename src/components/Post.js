import React,{useEffect,useState} from 'react';
import axios from "axios";
import _ from "lodash";


const pageSize=45;
const Post = () => {
 const [posts, setposts] = useState([]);
 const [paginated,setpaginated]=useState();
 const [currentPage, setcurrentPage] = useState();

 useEffect(() => {

var config = {
    
     url: 'https://glenmarklive.onrender.com/Live',
     headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        // 'Content-Type':'application/x-www-form-urlencoded',
        // 'Connection':'Keep-Alive',
        // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    },
    
    // withCredentials: false,
    };

    axios(config).then(function (res) {
    console.log(JSON.stringify(res.data));
    setposts(res.data);
    setpaginated(_(res.data).slice(0).take(pageSize).value())
         })
 }, [])
  const pageCount =posts?Math.ceil(posts.length/pageSize) :0;
  if (pageCount===1) return null;
  const pages = _.range(1,pageCount+1);

  const pagination=(pageNo)=>{
     setcurrentPage(pageNo);
     const startIndex=(pageNo-1)*pageSize;
     const paginationPost = _(posts).slice(startIndex).take(pageSize).value();
  setpaginated(paginationPost)
};
    return (
   
    <div>
        {!paginated ? ("Loading Content ..."):(
        
        <table className='table table-responsive table-striped table-primary table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Utility</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>RA Temp</th>
                    <th>RA %RH</th>
                    <th>SA Temp</th>
                    <th>SA %RH</th>
                    <th>SA DPT</th>
                    <th>TxnDate</th>
                    <th>TxnTime</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    paginated.map((post,index)=>(
                        <tr key={index}>
                            <td>{post.UtilityName}</td>
                            <td>{post.LocationName}</td>
                            <td><p className={post['Unit Status F/B']==='1' ? "btn btn-success":"btn btn-danger"}>{post['Unit Status F/B']==='1'?"On":"Off"}</p></td>
                            <td><p className={post['RA Temp']>'25'& post['Unit Status F/B']==='1' ? "text-danger font-weight-bold":"text-dark"}>{post["RA Temp"]}</p></td>
                            <td><p className={post['RA Humidity']>'60'& post['UtilityName'].includes('CCH') ? "text-danger font-weight-bold":"text-dark"}>{post["RA Humidity"]}</p></td>
                            <td>{post["SA Temp"]}</td>
                            <td><p>{post['SA %RH']}</p></td>
                            <td>{post["SA DPT"]}</td>
                            <td>{post["TxnDate"]}</td>
                            <td>{post["TxnTime"]}</td>
                            <td>{post["MeterSerial"]}</td>
                            
                        </tr>
                        
                    ))
                }
            </tbody>
        </table>
        )}
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {
                 
                 pages.map((page)=>  <li className={page===currentPage?"page-item active":"page-item"}><p className="page-link" onClick={()=>pagination(page)}> { page } </p></li> )
               
                }
            </ul>
        </nav>
        </div>
         )
};


export default Post;
