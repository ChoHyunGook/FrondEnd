import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Login(){
    const[id,setId]=useState();
    const[pw,setPw]=useState();
    const[name,setName]=useState();
    const[result,setResult]=useState();
    const sum=()=>{
        let id=document.getElementById('id').value
        console.log('ID:'+id)
        let pw=document.getElementById('pw').value
        console.log('PASSWORD:'+pw)
        let name=document.getElementById('name').value
        console.log('이름:'+name)
        setId(id)
        setPw(pw)
        setName(name)
        setResult("로그인성공")

    }
    return <Layout><h1>로그인</h1>
    
    <label htmlFor="">ID</label><br />
    <input id="id" type="" /><br />
    <label htmlFor="">Pw</label><br />
    <input id="pw" type="" /><br/>
    <label htmlFor="">성함</label><br />
    <input id="name"type="text" />
    <button onClick={()=>{sum()}}>입력</button>
    <div>ID:{id}<br/> PASSWORD:{pw}<br/> NAME:{name}<br/> 결과:{result}</div>
    </Layout>
}