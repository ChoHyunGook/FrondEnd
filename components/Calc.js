import React, {useState} from "react";
import Layout from "../containers/Layout";
import { useLinkClickHandler } from "react-router-dom";

export default function Calc(){
    const[inputs,setInputs]=useState({})
    const{num1,num2,op}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({
            ...inputs,[name]:value})
    }
    
    const handleClick=(e)=>{
        e.preventDefault()
        const calcRequest={num1,num2,op}
        alert(`사용자이름:${JSON.stringify(calcRequest)}`)
    }
    return <Layout>
    <form><h1>계산기</h1>
    
    <label htmlFor="">num1</label><br />
    <input type="text" name="num1" onChange={handleChange}/><br />
    <label htmlFor="">op</label><br />
    <input type="text" name="op" onChange={handleChange}/><br />
    <label htmlFor="">num2</label><br />
    <input type="text" name="num2" onChange={handleChange}/><br />
    <button onClick={handleClick}>실행</button>
  
  </form>
    </Layout>
}

//<select name="" id="">
    //     <option value="">+</option>
    //     <option value="">-</option>
    //     <option value="">*</option>
    //     <option value="">/</option>
    //     <option value="">%</option>
    // </select>
    