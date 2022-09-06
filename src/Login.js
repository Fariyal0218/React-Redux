import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login=()=>{

    const loginObj={
        email:'',
        password:''
    }
    
    const navigate=useNavigate()

    const[login,setLogin]=React.useState(loginObj);

    const setValue=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value});
    }

const checkLogin=()=>{
    axios.post('http://localhost:8080/checkLogin,login')
    .then(responce=>responce.data)
    .then(res=>{
        if(res.status===200){
            navigate('/Counter')
        }
    })
}


return(
    <div>
        <form>
            <label>Email :</label>
            <input type='email' name='email' onChange={setValue}/>

            <label>Password :</label>
            <input type='password'  name="password" onChange={setValue}/>
            
            <button type="button" onClick={checkLogin}>Login</button>
        </form>
    </div>
)
}
export default Login