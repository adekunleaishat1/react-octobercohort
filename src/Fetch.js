import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Fetch = () => {
    const [formdetail, setformdtail] = useState({
        email:"",
        username:"",
        password:""
    })
    const [alluser , setalluser] = useState([])
    const [isloading, setisloading] = useState(false)
    useEffect(() => {
      axios.get("http://localhost:3245/posts")
      .then((res)=>{
        console.log(res);

        setalluser(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
      
    }, [isloading])
    
    
    const handleformChange = (e) =>{
      let name = e.target.name
       setformdtail({...formdetail, [name]:e.target.value}) 
    }
    const register = () =>{
        setisloading(true)
      const existuser =   alluser.find((el)=> el.email === formdetail.email)
      console.log(existuser);
      if (existuser) {
        alert("user already exist")
        setisloading(false)
      }else{
        console.log(formdetail);
        axios.post("http://localhost:3245/posts",formdetail)
        .then((res)=>{
            console.log(res);
            setisloading(false)
            
        }).catch((err)=>{
            console.log(err);
            setisloading(false)
        })
      }
        
    }
    
  return (
    <div>
        <div>
            <input name='username' onChange={(e)=>handleformChange(e)}  type="text" />
            <input name='email' onChange={(e)=>handleformChange(e)}  type="email" />
            <input name='password' onChange={(e)=>handleformChange(e)}   type="password" />
            <button disabled={isloading} onClick={register}>register</button>
        </div>

    </div>
  )
}

export default Fetch