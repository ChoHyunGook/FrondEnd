import React,{useState} from "react";
import { memberChange } from "../api";
import Layout from "../containers/Layout";

export default function Change(){
    const[inputs,setInputs]=useState({});
    const{input}=inputs;
    const[res,setRes]=useState('')

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        memberChange({input}).then(res=>setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }
    
    return <Layout>
    <form>
        <h1>300원 커피 자판기 잔돈</h1>
    
    <label htmlFor="">투입하실 금액</label><br />
    <input type="text" name="input" onChange={handleChange} />
    <button onClick={handleClick}>입력</button>
    </form>
    <>{res}</>
    </Layout>
}
