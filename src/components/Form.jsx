import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import nextId from "react-id-generator";
import styled from "styled-components";

const Form = () => {
  const id = nextId();
  const todos = useSelector((state) => state.todos.todos); //3.useSelector로 todos의 상태값을 조회.

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    body: "",
  }); //애초에 객체에 다 키가 들어있는지, 인풋되는것만 넣든지 결정.

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.body.trim() === "") return;

const newItem = {...input, id: id, order: todos.length +1, isDone: false} //1.

dispatch(addTodo(newItem)); //2 참고 title, body외에 다른 키값은 영향을 주지 않는다.
    setInput({
      title: "",
      body: "",
    });
  }; //초기값은 인풋내용을 초기화 하는것, 인풋객체를 따라도 된다.

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setInput({
     ...input,
      [name]: value,
    });
  }

  return (
    <StForm onSubmit={onSubmitHandler} >
      <StFormInputGroup >
        <StFormLabel htmlFor={id}>제목: </StFormLabel>
        <StFormInput
          id={id}
          type="text"
          name="title"
          value={input.title}
          onChange={onChangeHandler}
          placeholder="해야 할 일"
        />
        <StFormLabel>내용: </StFormLabel>
        <StFormInput
          id={id}
          type="text"
          name="body"
          value={input.body}
          onChange={onChangeHandler}
          placeholder="어떻게?"
        />
      </StFormInputGroup>
      <StFormButton>추가하기</StFormButton>
    </StForm>
  );
};

export default Form;

//7.form에서 return 받을 친구들을 정리. 제목, 내용, 추가하기 버튼.//todos
//9.addTodo 액션크리에이터 연결 thru onSubmitHandler //TodoList
//9-1. 리턴에 <form onSubmit={onSubmitHandler}>
//9-1. 리턴에 <input type="text" name="title" value={todo.title}/> 내용쪽도 같이.
//11. onChangeHandler 이벤트 연결
//11-1. 리턴에 onChangeHandler 이벤트 연결 //List

const StForm = styled.form`
  background-color: rgba(221, 221, 221, 0.507);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const StFormInputGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const StFormLabel = styled.label`
  font-size: 23px;
  font-weight: 800;
  `;
const StFormInput = styled.input`
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 150px;
  padding: 0 12px;
  font-size: large;
  `;
  const StFormButton = styled.button`
  border: none;
  background-color:rgba(0, 139, 133, 0.74);
  border-radius: 10px;
  height:30px;
  width: 100px;
  color:rgb(255, 255, 255);
  font-style: oblique;
  font-weight: 800;
  box-shadow: 0px 1px 10px 2px rgb(61, 61, 61);
  font-size: large;
  cursor: pointer;
  `;