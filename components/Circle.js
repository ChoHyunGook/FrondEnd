import React from "react";
import Layout from "../containers/Layout";

export default function Circle(){
    return <Layout><h1>원넓이 계산기</h1>
    <form action="">
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">반지름</label><br />
    <input type="text" /><br />
    <label htmlFor="">원주율</label><br />
    <input type="text" /><br />
    <button>입력</button><br />

    </form>
    </Layout>
}
