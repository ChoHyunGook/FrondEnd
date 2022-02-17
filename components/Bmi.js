import React from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    return <Layout><h1>Bmi 계산기</h1>
    <form action="">
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">이름</label><br />
    <input type="text" /><br />
    <label htmlFor="">키</label><br />
    <input type="text" /><br />
    <label htmlFor="">몸무게</label><br />
    <input type="text" /><br/>
    <button>입력</button><br />

    </form>
    </Layout>
}
