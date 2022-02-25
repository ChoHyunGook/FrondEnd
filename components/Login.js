import React,{useState} from "react";
import { memberLogin } from "../api";
import Layout from "../containers/Layout";

export default function Login(){
    const[inputs,setInputs]=useState({})
    const{id,pw,name}=inputs;
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
        memberLogin({id,pw,name}).then(res=>setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }
    return <Layout><form><h1>로그인</h1>
    
    <label htmlFor="">ID</label><br />
    <input type="text" name="id" onChange={handleChange} /><br />
    <label htmlFor="">Pw</label><br />
    <input type="text" name="pw" onChange={handleChange}/><br/>
    <label htmlFor="">성함</label><br />
    <input type="text" name="name" onChange={handleChange}/>
    <button onClick={handleClick}>입력</button>
    </form>
    <>{res}</>
    </Layout>
}