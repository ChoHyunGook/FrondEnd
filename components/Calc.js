import React, {useState} from "react";
import { memberCalc } from "../api";
import Layout from "../containers/Layout";



export default function Calc(){
    const[inputs,setInputs]=useState({})
    const[res,setRes]=useState('')
    const{num1,num2,op}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({
            ...inputs,[name]:value})
    }
    
    const handleClick=(e)=>{
        e.preventDefault()
        memberCalc({num1,op,num2}).then(res => setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }
    return <Layout>
        <form><h1>계산기</h1>
    
            <label htmlFor="">num1</label><br />
            <input type="text" name="num1" onChange={handleChange}/><br />
            <select name="op" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />
            <label htmlFor="">num2</label><br />
            <input type="text" name="num2" onChange={handleChange}/><br />
            <button onClick={handleClick}>실행</button><br/>
        </form>
        <>결과:{res}</>
    </Layout>
}


    