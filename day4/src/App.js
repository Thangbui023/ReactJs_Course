import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Table from "react-bootstrap/Table";




function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const handleFetchData = async () => {

      try {
               const request = await axios.get(`http://localhost:9999/company`);
               console.log("request", request);

               if (request) {
                 setCompanies(request.data);
               }
      } catch (error) {
        console.log("error", error);
      }
  
    };
    handleFetchData();
  }, []);

  const RowTable = companies.map((item, index) => {
    const {id, name, category, end} = item;
    return (
      <tr key ={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{end}</td>
      </tr>
    );
  })
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Category</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
        {RowTable}
        </tbody>
      </Table>
    </>
  );
}

export default App;
