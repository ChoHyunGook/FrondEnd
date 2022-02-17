import React from "react";
import Layout from "../containers/Layout";

export default function Week(){
    return <Layout><h1>주급계산기</h1>
    <form action="">
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">이름</label><br />
    <input type="text" /><br />
    <label htmlFor="">하루 일하는시간</label><br />
    <input type="text" /><br />
    <label htmlFor="">1주 기준 일하는 날짜 </label><br />
    <input type="text" /><br />
    <label htmlFor="">시급</label><br />
    <input type="text" /><br />
    <button>입력</button><br />
    </form>
    </Layout>
}