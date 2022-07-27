
import Header from '../header/header';
import Form from '../form/Form';
import Layout from '../layout/Layout';
import List from '../list/List';
import { useState } from 'react';

function TodoList () {
       
        let [todos, setTodos] = useState([
                {  
                        id: 1, //  todos[0].id 
                        title: "리액트 공부하기", //  todos[0].title
                        body: "리액트 기초를 공부해봅시다.", //  todos[0].body
                        isDone: false,
                      },
                      {
                        id: 2,
                        title: "리액트 공부하기",
                        body: "리액트 기초를 공부해봅시다.",
                        isDone: true,
                      },
        ]);

return(


         <Layout>
              <Header/>
               <Form todos={todos} setTodos={setTodos}/>
               
               <List todos={todos} setTodos={setTodos}/>  
        </Layout>
 
)

}



export default TodoList;