import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Change(){
    const[input,setInput]=useState(0);
    const[result,setResult]=useState(0);
    const sum =()=>{
        let input=document.getElementById('input').value
        console.log('투입금액:'+input)
        setInput(input)
        setResult(Number(input)-300)
    }
    return <Layout><h1>300원 커피 자판기 잔돈</h1>
    
    <label htmlFor="">투입하실 금액</label><br />
    <input id="input" type="text" />
    <button onClick={()=>{sum()}}>입력</button>
    <div>투입금액:{input}<br/>잔돈:{result}</div>

    </Layout>
}
