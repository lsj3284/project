import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHandler, onEditHandler }) {   
  //List.jsx를 통해서 props 로 전달 받은 함수들
  console.log(todo.title)
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2> 

        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandler(todo.id)}  //여기서 받은 파라미터값이 List.jsx 에 함수와 연동됨 id를 기준으로 구분합니다.
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료" } 
          {/* todo.isDone이 true이면 취소 false이면 완료  */}
        </button>
      </div>
    </div>
  );
}

export default Todo;