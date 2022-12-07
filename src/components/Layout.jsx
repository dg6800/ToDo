import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 100vh;
`;

//13. Layout
//children props를 가지고 페이지 레이아웃을 만들며
//개별적으로 존재하는 Header, Footer, Page를 합성하여
//개발자가 의도하는 UI를 만들어주는 Layout 컴포넌트를 만들어보자. //TodoList