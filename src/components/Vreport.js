export default function Vreport({ reportData }) {

return (
        <table>
            <thead>
                <tr>
                     {Object.keys(reportData[0]).map(key => <th key={key}>{key}</th>)} 
                </tr>
            </thead>
            <tbody>
                {
                reportData.map((data, index) => (
                    <tr key={index}>
                        
                        {Object.values(data).map((value, index) => <td key={index}>{value}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    )   }