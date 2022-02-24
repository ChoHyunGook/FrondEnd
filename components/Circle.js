import React,{useState} from "react";
import Layout from "../containers/Layout";
import { useLinkClickHandler } from "react-router-dom";

export default function Circle(){
    const[inputs,setInputs]=useState({})
    const{half,pi}=inputs;
    
    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({...inputs,[name]:value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const cirRequest={half,pi}
        alert(`사용자이름: ${JSON.stringify(cirRequest)}`)
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
    </Layout>
}
