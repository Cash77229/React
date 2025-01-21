import { useEffect, useState } from 'react'
import './App.css'
import { Audio } from 'react-loader-spinner'

function App() {
 const [loader ,setLoading] = useState(false);
 const [data ,setData] = useState([]);

  useEffect(() =>{
   setLoading(true);
   async function getData(){
     const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001");
     const finalRes = await res.json();
     setData(finalRes);
     setLoading(false);
    
   }
    
   
   getData();
   
  },[]);
 return (
 
  <>
  <div className='main'>
  {loader ? 
  <Audio/>
  :
  
  data.map((e,i) => {
   
   return(
     <p>{e.email}</p>
   )
  })
  }
  </div>
 
  
  </>
 
 )
}
export default App