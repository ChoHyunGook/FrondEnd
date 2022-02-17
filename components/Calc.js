import React from "react";
import Layout from "../containers/Layout";

export default function Calc(){
    return <Layout><h1>계산기</h1>
    <form action="">
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">숫자</label><br />
    <input type="text" /><br />
    <label htmlFor="">연산자</label><br />
    <input type="text" /><br />
    <label htmlFor="">숫자</label><br />
    <input type="text" /><br />
    <button>입력</button><br />
  
    </form>
    </Layout>
}
