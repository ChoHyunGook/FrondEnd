import React,{useState} from "react";
import { memberWeek } from "../api";
import Layout from "../containers/Layout";

export default function Week(){
    const[inputs,setInputs]=useState({})
    const{name,hour,day,salary}=inputs;
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
        memberWeek({name,hour,day,salary}).then(res=>setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }
    
    return <Layout><form><h1>주급계산기</h1>
    <label htmlFor="">이름</label><br />
    <input name="name" type="text" onChange={handleChange}/><br />
    <label htmlFor="">하루 일하는시간</label><br />
    <input name="hour"type="text" onChange={handleChange}/><br />
    <label htmlFor="">1주 기준 일하는 날짜 </label><br />
    <input name="day"type="text" onChange={handleChange}/><br />
    <label htmlFor="">시급</label><br />
    <input name="salary"type="text" onChange={handleChange}/><br />
    <button onClick={handleClick}>입력</button><br />
    </form>
    <>{res}</>
    </Layout>
}