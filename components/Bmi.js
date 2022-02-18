import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    const[name,setName]=useState();
    const[inch,setInch]=useState(0);
    const[weight,setWeight]=useState(0);
    const[result,setResult]=useState(0.0);
    const sum =()=>{
        let name =document.getElementById('name').value
        console.log('이름 :'+name)
        let inch =document.getElementById('inch').value
        console.log('키 :'+inch)
        let weight =document.getElementById('weight').value
        console.log('몸무게:'+weight)
        setName(name)
        setInch(inch)
        setWeight(weight)
        setResult(Number(weight)/Number(inch)*Number(inch))
    }

    return <Layout><h1>Bmi 계산기</h1>
    
    <label htmlFor="">이름</label><br />
    <input id="name" type="" /><br />
    <label htmlFor="">키</label><br />
    <input id="inch" type="" /><br />
    <label htmlFor="">몸무게</label><br />
    <input id="weight" type="" /><br/>
    <button onClick={()=>{sum()}}>입력</button><br />
    <div>이름 : {name}<br /> 키 :{inch}<br/> 몸무게:{weight}<br/>Bmi지수:{result}</div>

    
    </Layout>
}
