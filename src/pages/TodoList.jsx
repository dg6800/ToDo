import React from "react";
// import './style.css';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

const TodoList = () => {
  return (
    <Layout>
    {/* <div id="container"> */}
      <Header />
      <Form />
      <List />
    {/* </div> */}
    </Layout>
  )
}

export default TodoList;


//5.TodoList 컴포넌트를 선언하고, 리턴받을것 프레임을 정하자
//5-1.TodoList 리턴 div id를 정하고 css로 일단 빨간선을 그어 시각화하며, //style.css
//컴포넌트를 하나하나씩 붙여나가자. //Header
//6-2.임포트/리턴에 Header를 연결 //Form
//10. 임포트/리턴에 Form 연결. //Form
//12. 임포트/리턴에 List연결. //Layout
//14. 임포트/리턴에 Layout연결 //List
