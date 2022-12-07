import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import {Link} from "react-router-dom"
import styled from "styled-components";

const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };
    const onToggleStatusTodo = (id) => {
        dispatch(toggleStatusTodo(id));
    };

    return (
    <StListContainer>
      <StCardContainer>
      <h2>해야 할 일 📌</h2>
      <StSquareList1>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`${todo.id}`}>
                <StLinkTitle>{todo.order}번 details ➡️</StLinkTitle>
                </StLink>
                <StTodoTitle>{todo.title}</StTodoTitle>
                <StTodoBody>{todo.body}</StTodoBody>
              <StTodoButtonSet>
              <StTodoButtonDelete onClick={() => onDeleteTodo(todo.id)}>삭제하기</StTodoButtonDelete>
              <StTodoButtonEdit onClick={() => onToggleStatusTodo(todo.id)}>{!todo.isDone ? "완료" : "취소"}</StTodoButtonEdit>
              </StTodoButtonSet>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StSquareList1>
      </StCardContainer>
      <StCardContainer>
      <h2 className="list-title">그나마 한 일 ✔︎</h2>
      <StSquareList2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
                <StTodoContainer key={todo.id}>
                  <StLink to={`${todo.id}`}>
                  <StLinkTitle>{todo.order}번 details ➡️</StLinkTitle>
                  </StLink>
                  <StTodoTitle>{todo.title}</StTodoTitle>
                  <StTodoBody>{todo.body}</StTodoBody>
                  <StTodoButtonSet> 
                  <StTodoButtonDelete onClick={() => onDeleteTodo(todo.id)}>삭제하기</StTodoButtonDelete>
                  <StTodoButtonEdit onClick={() => onToggleStatusTodo(todo.id)}>{!todo.isDone ? "완료" : "취소"}</StTodoButtonEdit>
                  </StTodoButtonSet> 
                </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StSquareList2>
      </StCardContainer>
    </StListContainer>
    )
}
export default List;


const StListContainer = styled.div`
  padding: 0 20px;
  border: 4px solid rgba(238, 107, 255, 0.377);
  padding-bottom: 10px;
  min-height: 600px;
  display: flex;
  flex-direction: column;

`;
const StSquareList1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
  justify-content: flex-start;
  
`;
const StSquareList2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
  justify-content: flex-start;
`;
const StTodoContainer = styled.div`
  width: 130px;
  border: 3px solid rgb(255, 198, 40);
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
`;
const StTodoButtonSet = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  justify-content: space-between;
`;
const StTodoButtonDelete = styled.button`
  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
`;
const StTodoButtonEdit = styled.button`
  border: 2px solid rgb(49, 207, 255);
  border-radius: 10px;
  cursor: pointer;
`;
const StTodoTitle = styled.div`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: rgb(231, 13, 13);
`;
const StLink = styled(Link)`
  text-decoration: none;
  text-align: right;
`;
const StLinkTitle = styled.div`
  text-align: right;
  font-size: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline};
`;
const StCardContainer = styled.div`
  min-height: 200px;
  max-height: 600px;
  padding: 20px;
`;
const StTodoBody = styled.div`
  font-size: small;
  overflow: hidden;
  `

//12. 리턴은 그전에 하던거 긁어오고, 핸들러 선언, 이름수정.
//12-1.지난주 리턴에 밑에처럼 Todo component에서 객체 값을 가져왔다면,
//<Todo todo={todo} key={todo.id} onDeleteHandler={onDeleteHandler} onEdit={onEdit}/>
//저 Todo 컴포넌트는 이제 모듈로서 함수를 돌리는 리듀셔와 액션크리에이터를 보내는 역할을하니, 
//{todo.title} 이런식으로 객체의 키값을 가져온다.
//이번에는 삭제핸들러와 취소/완료핸들러에 복잡한 함수는 reducer에서 돌리고, List 컴포넌트에서는 dispatch하여 보냄.
//그리고 reducer 함수를 거치고 반환한 값은 액션크리에이터를 버튼 온클릭에 연결함.
//15. todo카드에 상세보기 링크 연결하기 
// <Link to={`${todo.id}`}> 링크//detail

