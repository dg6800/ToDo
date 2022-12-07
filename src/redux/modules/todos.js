//action value
const ADD_TODO = "ADD_TODO"; //8
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
//action creator 4개 (addTodo(Form), deleteTodo, toggleStatusTodo, getTodoById)
//addTodo
export const addTodo = (payload) => {
  //8
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
//deleteTodo
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
//toggleStatusTodo
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: payload,
  };
};
//getTodoById
export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload: payload,
  };
};
//initial state
const initialState = {
  todos: [
    {
      id: "1",
      order: 1,
      title: "명상하기",
      body: "숨을 가다듬으며",
      isDone: false,
    },
  ],
  todo: {
    id: "1",
    order: 1,
    title: "명상하기",
    body: "숨을 가다듬으며",
    isDone: false,
  },
}; //8
//reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};
//export default
export default todos;

//3.이 모듈에 이따가 만들거 미리 주석화 해놓기//Router
//8.Form 컴포넌트에서 필요한 addTodo 부터 만들자.
