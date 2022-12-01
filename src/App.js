import React, { useState } from "react";
import "./App.css";

function ToDoBoard({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    //10
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEdit = (todoId) => {
    //10
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo, isDone: todo.isDone };
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="list-container">
      <h2 className="list-title">해야 할 일 📌</h2>
      <div className="square-list">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteHandler={onDeleteHandler} //12
                onEdit={onEdit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">그나마 한 일 ✔︎</h2>
      <div className="square-list">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteHandler={onDeleteHandler} //12
                onEdit={onEdit}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

function Todo({ todo, onDeleteHandler, onEdit }) {
  //9
  return (
    //9, 11
    <div>
      <div className="todo-container">
        <h3 className="todo-title"> {todo.title}</h3>
        <div className="todo-line"></div>
        <div>{todo.body}</div>
        <div className="todo-button-set">
          <button
            className="todo-button-delete button"
            onClick={() => onDeleteHandler(todo.id)}
          >
            삭제하기
          </button>
          <button
            className="todo-button-edit button"
            onClick={() => onEdit(todo.id)}
          >
            {todo.isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </div>
  );
}

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};
let number = 3;
function InputForm({ setTodos, todos }) {
  //6
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  console.log(todos);

  const [todo, setTodo] = useState(initialState); //6,7
  const onChangeHandler = (event) => {
    //7
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    //7
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    //2
    <form onSubmit={onSubmitHandler} className="form">
      <div className="form-input-group">
        <label className="form-label">제목: </label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
          className="form-input"
        />
        <label className="form-label">내용: </label>
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
          className="form-input"
        />
      </div>
      <button className="form-button">추가하기</button>
    </form>
  );
}
function Header() {
  return (
    //4
    <div className="container">
      <div>My Todo List</div>
      <div>React</div>
    </div>
  );
}

//1
const App = () => {
  const [todos, setTodos] = useState([
    //8
    {
      id: 1,
      title: "명상하기",
      body: "호홉을 가다듬으며",
      isDone: false,
    },
    {
      id: 2,
      title: "공부하기",
      body: "겸손해지게 해줌",
      isDone: true,
    },
  ]);

  return (
    //1 //5 //8
    <Layout>
      <Header />
      <InputForm todos={todos} setTodos={setTodos} />
      <ToDoBoard todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default App;
