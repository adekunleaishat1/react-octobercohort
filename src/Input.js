import React,{useState} from 'react'

const Input = () => {
    const [Input1, setInput1] = useState("")
    const [Input2, setInput2] = useState("")
    const [allinput, setallinput] = useState([])
    const [showing, setshowing] = useState(false) 
    let gender = "female"
   
    const Save = () =>{
      console.log(Input1, Input2);
      let userobj = {
        Input1,
        Input2
      }
      console.log(userobj);
      setallinput([...allinput, userobj])
      
    }

    const show = () =>{
      setshowing(!showing)
    }
    // {conditional expression ? "truth expression" : "falsy expression"}
  return (
    <div>
        <input onChange={(e)=> setInput1(e.target.value)} type="text" />
        <input onChange={(e)=> setInput2(e.target.value)} type="text" />
        <button onClick={Save}>Save</button>

        <input type={showing ? "text" : "password"} /><button onClick={show}>Show</button>

       <h1 className={gender == "male" ? "text-primary" : "text-danger"}>there</h1>

        { allinput.length == 0 ? 
        (<h1>
          No User Available at the moment
        </h1>) :
        allinput.map((inp)=>(
          <>
          <p>{inp.Input1}</p>
          <p>{inp.Input2}</p>
          </>
        ))}
    </div>
  )
}

export default Input