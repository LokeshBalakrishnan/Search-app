import './App.css';
import {useState,useEffect} from "react";


function display(data,prefix){
  let list = [];

  for(let arr of data){

    if(prefix.length==0 || arr.Name.indexOf(prefix)==0){
      
    list.push(<div className="data">
      <tr>
        <td>{arr.Name}</td>
        <td>{arr.Mobile}</td>
        <td>{arr.Dept}</td>
      </tr>
    </div>)

  }
}
  return list;
}

function App() {

  const [prefix,setPrefix]=useState("");


  const data=[
    {
        "Name": "janani m",
        "Mobile": "6369422563",
        "Dept": "it"
    },
    {
        "Name": "sowbarnika s s",
        "Mobile": "6381522065",
        "Dept": "ece"
    },
    {
        "Name": "srinithi",
        "Mobile": "7094275853",
        "Dept": "cse"
    },
    {
        "Name": "karan",
        "Mobile": "7449104243",
        "Dept": "ece"
    },
    {
        "Name": "santhiyaa.b",
        "Mobile": "9159569246",
        "Dept": "cse"
    },
    {
        "Name": "jesheer",
        "Mobile": "9087055318",
        "Dept": "ece"
    },
    {
        "Name": "sowmiya m",
        "Mobile": "9842277242",
        "Dept": "csbs"
    },
    {
        "Name": "harsha pradha.m",
        "Mobile": "9677870020",
        "Dept": "ece"
    },
    {
        "Name": "gowtham g",
        "Mobile": "8248435966",
        "Dept": "cce"
    }
]



  return (
    <div>

      <input type="text" name="search" onChange={ 
        (event) => {
           setPrefix(event.target.value);
        }
      } />
      
      <table>
        <thead>
          <th>Name</th>
          <th>Mobile</th>
          <th>Department</th>
        </thead>
        <tbody>
        {display(data,prefix)}
        </tbody>
      </table>

    </div>
  );
}

export default App;
