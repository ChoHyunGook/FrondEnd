import React,{useState} from "react";
import Layout from "../containers/Layout";
import { useLinkClickHandler } from "react-router-dom";
import axios from 'axios';

export default function Bmi(){
    const[inputs,setInputs]=useState({})
    const {name,inch,weight}=inputs;//object Destructuring
    
    const handleChange = (e) => {
     e.preventDefault()
     const {value,name}=e.target;
     setInputs({...inputs,[name]:value})
    }

     const handleClick=(e)=>{
         e.preventDefault()
         const bmiRequest={name,inch,weight}
         alert(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
         // axios.get(`http://localhost:8080/member/bmi/aaa/180.5/80.5`)
         //     .then((res)=>{
         //         alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
         //     })
         
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
     <button onClick={handleClick}>Bmi 체크</button><br/>
     </>
     </form>
 
     </Layout>)

}

   

