
import Header from '../header/header';
import Form from '../form/Form';
import Layout from '../layout/Layout';
import List from '../list/List';
import { useState } from 'react';

function TodoList () {
       
        let [todos, setTodos] = useState([ //useState 안에 초기 설정을위한 객체배열을 선언합니다
                {  
                        id: 1, //  todos[0].id 
                        title: "리액트 공부하기", //  todos[0].title
                        body: "리액트 기초를 공부해봅시다.", //  todos[0].body
                        isDone: false, // isDone 이 false이면 
                      },
                      {
                        id: 2,
                        title: "리액트 공부하기",
                        body: "리액트 기초를 공부해봅시다2",
                        isDone: true,
                      },
        ]);

       

return(
        //retrun 을통해 렌더링 되는 구간에  자식 component를 각각 코딩합니다.

         <Layout>  
              <Header/>  
               <Form todos={todos} setTodos={setTodos}/>
               {/* props를 통해 데이터를 보내줄 변수를  속성으로 지정합니다 */}

               
               <List todos={todos} setTodos={setTodos}/>  
               {/* props를 통해 데이터를 보내줄 변수를  속성으로 지정합니다 */}
        </Layout>
 
)

}



export default TodoList;