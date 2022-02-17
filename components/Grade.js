import React from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    return <Layout><h1>성적표</h1>
    <form action="">
    <div>
    <img src="" alt="" />
    </div>
    <label htmlFor="">이름</label><br />
    <input type="text" /><br />
    <label htmlFor="">국어점수</label><br />
    <input type="text" /><br />
    <label htmlFor="">영어점수</label><br />
    <input type="text" /><br />
    <label htmlFor="">수학점수</label><br />
    <input type="text" /><br />
    <button>입력</button><br />

    </form>
    </Layout>
}
