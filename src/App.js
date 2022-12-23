import './App.css';
import React, { useState } from 'react';
import Header from './Heading';
function App() {
  const [data,setData] = useState({title:'',notes:''});
  const [store,setStore]= useState([]);
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleDelete=(ind)=>{
    var newstore= store;
     newstore.splice(ind,1);
     setStore([...newstore]);
     console.log(store);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newstore = store;
    newstore.unshift({notes:data.notes,title:data.title})
    setStore([...newstore]);
    console.log(store);
    console.log(data);
  }

  return (
    <div >
    <Header/>
      <div className="App">
        <input  style={{width:'500px',height:'40px',boxShadow:'null'}}name='title'  placeholder='Title'onChange={handleChange}></input><br/>
      <textarea style={{width:'500px',height:'110px',boxShadow:'null'}} name='notes' placeholder='Take a note...' onChange={handleChange}/> <br/>
      <button style={{position:'absolute',marginTop:'-40px',marginLeft:'150px',borderColor:'rgb(254, 200, 4)'}} type='add' id ='add' onClick={handleSubmit}>add</button>

  
    </div>
    {store.map((store,ind)=>{
          return(
        <div key={ind} className='res' style={{ width:'200px', height:'200px'}}>
          <div style={{paddingLeft:'10px'}}>
          <br/> <b> {store.title}</b><br/>
        <p>  {store.notes}</p>
          
          <button type='submit' id='delete' onClick={()=>handleDelete(ind)}>DELETE</button>
          </div>
        </div>
          )
        })}
           </div>
   
  );
}

export default App;