import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

//4.메인이 될 TodoList와 이동할 Detail상세 페이지들의 route를 연결하자
//4-1.BrowserRouter, 깔끔한 url을 위해 provider로 전체를 감싸자.
//4-2.그안에 routes를 맨들어놓자. 밑에 예시를 복습하고 잘 따라해 만들자.
//<Route path="/" element={<Home />} />
//<Route path="works" element={<Works />} />
//<Route path="works/:id" element={<Work />} />

//4-3.일단 TodoList로 가서 큰 프레임을 짜고 연결하자. //TodoList
//아직 연결하지 않은 detail은 주석처리 해놓자.
