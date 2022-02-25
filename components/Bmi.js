import React,{useState} from "react";
import Layout from "../containers/Layout";
import { memberBmi } from "../api/index";

export default function Bmi(){
    const[inputs,setInputs]=useState({})
    const[res,setRes]=useState('')
    const {name,inch,weight}=inputs;//object Destructuring
    
    const handleChange = (e) => {
     e.preventDefault()
     const {value,name}=e.target;
     setInputs({...inputs,[name]:value})
    }

     const handleClick=(e)=>{
         e.preventDefault()
         memberBmi({name,inch,weight}).then(res=>setRes(res.data))
         .then(res=>{
             alert(res.data)
         })
         .catch(err=>console.log(`error:${err}`))
     }
     
     return (<Layout>
        <form>
        <h1>Bmi 계산기</h1>
     <>
     <label htmlFor="">이름</label><br />
     <input type="text" name="name" onChange={handleChange}/><br />
     <label htmlFor="">키</label><br />
     <input type="text" name="inch" onChange={handleChange}/><br />
     <label htmlFor="">몸무게</label><br />
     <input type="text" name="weight" onChange={handleChange}/><br />
     <button onClick={handleClick}>입력</button><br/>
     </>
     </form>
     <>결과:{res}</>
 
     </Layout>)

}

   

