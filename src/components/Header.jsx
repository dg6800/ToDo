import React from "react"
import styled from "styled-components";

const Header = () => {
    return(
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    );
};
export default Header;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /* 가장 위에 마이 투두리스트와 리액트 글자사이에 스페이스를 줌 */
  align-items: center;
  /* 컨테이너안에 아이템들은 중앙으로 배치 */
  padding: 0 20px;
  /* 옆에 공간 패딩은 살짝줌 */
  border-radius: 10px;
  font-size: 20px;
`

//6.Header에 넣을 text와 styled-components를 만들어, TodoList에 연결하자.
//styled-components를 쓸때는 import styled하고, <St...>하는식으로 이름정하고,
//백틱을 사용하여 스타일을 만들자. //TodoList