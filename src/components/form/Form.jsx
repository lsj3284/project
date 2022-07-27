import './style.css';
import {useState} from 'react';



function Form ({todos,setTodos}) {   //TodoList.jsx에서 props 해옴


    let data = {
        id : 0,      
        title: '',
        body : '',
        isDone : false,
    };  

    // 제목 저장 컴포넌트
     const [todo,setTodo] = useState(data);
     

    function send_date(e){
        const {name,value} = e.target;    
        setTodo({...todo,[name] : value, id : todos.length + 1 })  
    }   //바꾼내용을 전달하는 함수


    function onsubmithandler (e){
        e.preventDefault(); // 폼을 전송했을때 새로고침 방지
        setTodos([...todos,todo]); 
        setTodo(data);
    }



return(
    <form className='add-form' onSubmit={onsubmithandler} >
        {/* 입력내용을  전송 */}
        <div className='input-group'>
            <label className='form-lable'>제목</label>
            <input type="text" name="title" className="add-input input-body"
           onChange={ send_date} value={todo.title}/>
           {/* value 값이 '' 인상태에서 입력한뒤 send_date 함수를 통해서 전송 */}
            <label className='form-lable'>내용</label>
            <input type="text" name="body" className="add-input" 
              onChange={ send_date}  value={todo.body} />
              
        </div>
        <button className="add-button">추가하기</button>
    </form>
)

}

export default Form;