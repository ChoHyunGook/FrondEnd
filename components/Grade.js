import React,{useState} from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";

export default function Grade(){
    const[inputs,setInputs]=useState({})
    const{name,kor,eng,math}=inputs;
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
        memberGrade({name,kor,eng,math}).then(res=>setRes(res.data))
        .catch(err=>console.log(`error:${err}`))
    }
   
    return <Layout>
    <form>
    <h1>성적표</h1>

    <label htmlFor="">이름</label><br />
    <input type="text" name="name" onChange={handleChange}/><br />
    <label htmlFor="">국어점수</label><br />
    <input type="text" name="kor" onChange={handleChange}/><br />
    <label htmlFor="">영어점수</label><br />
    <input type="text" name="eng" onChange={handleChange}/><br />
    <label htmlFor="">수학점수</label><br />
    <input type="text" name="math" onChange={handleChange}/><br />
    <button onClick={handleClick}>입력</button><br />
    
    </form>
    <>{res}</>
    </Layout>
}
