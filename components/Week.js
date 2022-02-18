import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Week(){
    const[name,setName]=useState();
    const[hour,setHour]=useState(0);
    const[day,setDay]=useState(0);
    const[salary,setSalary]=useState(0);
    const[result,setResult]=useState(0);
    const[res,setRes]=useState(0);
    const sum=()=>{
        let name =document.getElementById('name').value
        console.log('이름:'+name)
        let hour=document.getElementById('hour').value
        console.log('일하는시간:'+hour)
        let day=document.getElementById('day').value
        console.log('날짜:'+day)
        let salary=document.getElementById('salary').value
        console.log('시급:'+salary)
        let res=result*day
        setName(name)
        setHour(hour)
        setDay(day)
        setSalary(salary)
        setResult(hour*salary)
        setRes(res)
    }
    
    return <Layout><h1>주급계산기</h1>
    <label htmlFor="">이름</label><br />
    <input id="name" type="text" /><br />
    <label htmlFor="">하루 일하는시간</label><br />
    <input id="hour"type="text" /><br />
    <label htmlFor="">1주 기준 일하는 날짜 </label><br />
    <input id="day"type="text" /><br />
    <label htmlFor="">시급</label><br />
    <input id="salary"type="text" /><br />
    <button onClick={()=>{sum()}}>입력</button><br />
    <div>성함:{name}<br/>일급:{result}<br/>주급:{res}</div>
    </Layout>
}