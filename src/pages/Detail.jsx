import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom';
import { getTodoById } from '../redux/modules/todos';
import styled from "styled-components";

const Detail = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todo);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTodoById(id));
    }, [dispatch, id])

    return (
    <StDetailContainer>
        <StDetailId>Id : {todo.order}번</StDetailId>
        <StDetailTitle>{todo.title}</StDetailTitle>
        <p>{todo.body}</p>
        <button onClick={() => navigate('/')}>이전으로</button>
    </StDetailContainer>
    );
};

export default Detail;

//16. Detail 에 dispatch, useSelector로 todo 조회, useNavigate로 이전페이지 이동,
//getTodoById 액션크리에이터
//17. styled components

const StDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 400px;
    border: 3px solid rgb(255, 198, 40);
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    background-color: #fff;
    box-sizing: border-box;
    
    `
const StDetailTitle = styled.text`
        font-size: 24px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: rgb(231, 13, 13);
        padding: 20px;
  `
  const StDetailId = styled.div`
  text-align: right;
  font-size: 5px;
`;
