import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Circle(){
    const[half,setHalf]=useState(0.0);
    const[pi,setPi]=useState(0.0);
    const[result,setResult]=useState(0.0);
    const sum =()=>{
        let half =document.getElementById('half').value
        console.log('반지름:'+half)
        let pi =document.getElementById('pi').value
        console.log('원주율:'+pi)
        setHalf(half)
        setPi(pi)
        setResult(Number(half)*Number(half)*Number(pi))
        console.log('결과값:'+result)
    }

    return <Layout><h1>원넓이 계산기</h1>
    
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">반지름</label><br />
    <input id="half"type="" /><br />
    <label htmlFor="">원주율</label><br />
    <input id="pi"type="" /><br />
    <button onClick={()=>{sum()}}>입력</button><br />
    <div>반지름:{half}<br/>원주율:{pi}<br/>원넓이:{result} </div>
    
    </Layout>
}
