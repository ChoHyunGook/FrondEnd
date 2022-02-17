import React from "react";
import Layout from "../containers/Layout";

export default function Login(){
    return <Layout><h1>로그인</h1>
    <form>
    <div>
    <img src="" alt="" />
    </div>
    <div>
    <label htmlFor="">ID</label><br />
    <input type="" /><br />
    <label htmlFor="">Pw</label><br />
    <input type="" /><br/>
    <label htmlFor="">성함 <br />
    <input type="text" />
    </label>
    </div>
    <div>
    <button>입력</button>
    <span></span>
    </div>
    </form>
    </Layout>
}