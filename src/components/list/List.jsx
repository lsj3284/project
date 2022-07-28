import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

//컨트롤러 파일

//todoList의 상황과 같이  props를 하기위해 Todo 컴포넌트를 불러오고있는 상황

function List({ todos, setTodos }) { // TodoList.jsx 를 props 받아온 함수 미리설정된 데이터가 들어있음
  const onDeleteHandler = (todoId) => {  // todoId 라는 파라미터값을 설정합니다
    
    const newTodos = todos.filter((todo) => { // 아래 조건을 필터 배열함수를 이용하여 반환된 값을 newTodos 변수에 저장합니다.
      console.log(todo.id);
      return todo.id !== todoId;  // todo.id가  todoId 파라미터값과 일치하지 않으면 삭제시키는 조건을 return 합니다
      
    });        // todo.id 는 기존에있던 객체의 id값 todoId는 새로 입력되어 받아지는 객체의 id값
                // 두객체의 id를 비교해서 아이디 값이 다르면(true) 삭제   
    console.log(todoId);  // 새로추가되는 객체는 todo Id 가 3부터 시작
    
    setTodos(newTodos); //newtodos 변수를  변경함수에 저장합니다.
  
  };

  const onEditHandler = (todoId) => {    //완료와 취소를 제어하는 함수 todoId 를 파라미터로 지정
    const newTodos = todos.map((todo) => {  // todos 를  배열반복문함수인 map을 사용하여 todo 라는 파라미터를 받는 콜백 함수를 선언합니다.
      if (todo.id === todoId) { //todo.id 기존에  값과   입력받은 todoId는 현재박스에있는 삭제버튼 값
        return {
          ...todo,   
          isDone: !todo.isDone, //   isDone이  false이면 ture를  true이면 false를 반환해주세요 , 느낌표 없애면 기능동작안함
        };
      } else {
        return { ...todo };// 그게아니라면 todo 파라미터만 반환해주세요
        //spread 문법은 기존의 객체는 그대로인상태에서 새로운 객체를 만든뒤 괄호를 벗겨 문자열로 만듬 
        // {} 안에 ...todo가 있으면 벗겨진값이 다시 객체가됨

      }
    });

    setTodos(newTodos); // newtodos 변수를  변경함수에 저장합니다.
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">

        {todos.map((todo) => { //Todo진행중에 드
          if (!todo.isDone) { // 0번 데이터 기준 isDone이 true이면  아래 컴포넌트를 반환
            return (
              <Todo
                todo={todo}  //파라미터로 입력된 값 표현
                key={todo.id} // 중복방지로 key 값 구현
                setTodos={setTodos} // 변화된 데이터값 
                onDeleteHandler={onDeleteHandler} // 삭제컨트롤
                onEditHandler={onEditHandler} // 완료와 취소 컨트롤
              />
            );
          } else {
            return null; //그게아니라면 null값을 반환
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {  // 0번 데이터 기준 isDone이 false이면  아래 컴포넌트를 반환
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;//그게아니라면 null값을 반환
          }
        })}
      </div>
    </div>
  );
}

export default List;