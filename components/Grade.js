import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[name,setName]=useState();
    const[kor,setKor]=useState(0);
    const[eng,setEng]=useState(0);
    const[math,setMath]=useState(0);
    const[result,setResult]=useState(0);
    const sum = () =>{
        let name =document.getElementById('name').value
        console.log('이름:'+name)
        let kor =document.getElementById('kor').value
        console.log('국어점수:'+kor)
        let eng =document.getElementById('eng').value
        console.log('영어점수:'+eng)
        let math =document.getElementById('math').value
        console.log('수학점수:'+math)
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult((Number(kor)+Number(eng)+Number(math))/3)
    }
    return <Layout><h1>성적표</h1>

    <label htmlFor="">이름</label><br />
    <input id="name"type="text" /><br />
    <label htmlFor="">국어점수</label><br />
    <input id="kor"type="" /><br />
    <label htmlFor="">영어점수</label><br />
    <input id="eng"type="" /><br />
    <label htmlFor="">수학점수</label><br />
    <input id="math"type="" /><br />
    <button onClick={()=>{sum()}}>입력</button><br />
    <div>이름:{name}<br/>국어점수:{kor}<br/>영어점수:{eng}<br/>수학점수:{math}<br/>평균:{result}</div>

    </Layout>
}
