import React,{useState} from "react";
import Layout from "../containers/Layout";
import { memberCircle } from "../api";

export default function Circle(){
    const[inputs,setInputs]=useState({})
    const{half,pi}=inputs;
    const[res,setRes]=useState('')
    
    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({...inputs,[name]:value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        memberCircle({half,pi}).then(res=>setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }

    return <Layout>
    <form>
    <h1>원넓이 계산기</h1>
    
    <>
    <label htmlFor="">반지름</label><br />
    <input type="text" name="half" onChange={handleChange} /><br />
    <label htmlFor="">원주율</label><br />
    <input type="text" name="pi" onChange={handleChange} /><br />
    <button onClick={handleClick}>입력</button><br />
    </>
    </form>
    <>{res}</>
    </Layout>
}
