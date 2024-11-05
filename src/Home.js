import React,{useState} from 'react'
import { FaAccusoft, FaAddressBook } from 'react-icons/fa'
import img1 from './Frame 130.png'

const Home = () => {
  const [user, setuser] = useState("Tolani")
  const [alluser, setalluser] = useState([
    {name:"Aishat", class:"Angular"},
    {name:"Hero", class:"React"},
    {name:"Testimony", class:"Node"},
    {name:"Abdul-basit", class:"Php"},
    {name:"Ayo", class:"Vue"},
  ])
   let name = "Temi"

   const clickme = (t) =>{
    
     name = "Tolu"
     console.log(name);
      setuser(t)
     
   }
  return (
    <div>
      <h1>{name}</h1>
      <p>{user}</p>
      <button onClick={()=>clickme("tola")}>Click</button>
      {/* {alluser.map((user, i)=>{
           
         return(
            <>
            <div key={i}>
              <h1>{user.name}</h1>
              <h1>{user.class}</h1>
            </div>
            </>
         )
      })} */}
       {alluser.map((user, i)=>(
            <>
            <div key={i}>
              <h1>{user.name}</h1>
              <h1>{user.class}</h1>
            </div>
            </>
      ))}

        {/* <h1>{Math.random()}</h1>
        <h1>Home</h1>
        <button className='btn btn-dark'>Click me</button>
        <i className='fa fa-users'></i>
        <FaAddressBook/>
        <FaAccusoft/>
       
        <img src={img1} alt="" />
        <img src={require("./Frame 130.png")} alt="" /> */}
    </div>
  )
}

export default Home