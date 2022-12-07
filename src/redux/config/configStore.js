import { createStore } from "redux";
import { combineReducers } from "redux";
// import counter from "../modules/counter";
import todos from "../modules/todos";

/*
1. createStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.
*/

/*
2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
*/
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

// const rootReducer = combineReducers({
//   counter: counter,
// });
// const store = createStore(rootReducer);

export default store;

//위에 우리가 추가한 카운도 모듈을 불러온다
//rootReducer = combineReducers({counter: counter}) 추가
//이렇게 코드를 추가하면 store와 module이 연결됩니다
//모듈을 한개씩 추가할때 마다 이짓을 하면 됨.
//잘연결되었는지 확인법은 컴포넌트에서 스토어를 직업 조회하면됨.
//useSelector라는 react-redux의 hook을 사용합니다. //App.js로

//2.config에서 리듀서랑 이것저것 확인.//todos
