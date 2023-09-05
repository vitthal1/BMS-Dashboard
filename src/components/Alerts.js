// import Header from './Header';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
// const Form = () => 
// {
//     const [formData, setFormData] = useState({});
//     const [responseData, setResponseData] = useState({});
  
//     const handleChange = (event) => {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//       });
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const res = await fetch("", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//         const data = await res.json();
//         setResponseData(data);
//       } catch (err) {
//         console.error(err);
//       }
// }};
  

// const Alerts = ()=>{
    
//     return (
//         <> 
//         <Header/>
//         <Sidebar/>
//         <h1>This is Alerts page</h1> 
//         <form onSubmit={handleSubmit}>
//       {/* Add form inputs */}
//       <input
//         type="date"
//         name="FromDate"
//         placeholder="2023-02-05"
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         name="ToDate"
//         placeholder="2023-02-05"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//       {Object.keys(responseData).length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               {Object.keys(responseData).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {Object.values(responseData).map((value) => (
//                 <td key={value}>{value}</td>
//               ))}
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </form>
//         <Footer/>
//         </>
//        )

// };

// export default Alerts;