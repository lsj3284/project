import './style.css';
import {useState} from 'react';



function Form ({todos,setTodos}) {   //TodoList.jsx에서 props 해옴

    
      

    let data = {  // 앞으로 input을 통해 입력받을 값을 저장할 데이터객체를 data라는 변수에 저장
        id : 0,      
        title: '',
        body : '',
        isDone : false,
    };  

    // 제목,내용 저장할 변수 
     const [todo,setTodo] = useState(data);// data 변수를  useState를 통해서 todo 변수에 저장 
     

    function send_date(e){   
        const {name,value} = e.target;    
        //e.target 을통해 발생한 이벤트값을 destructuring 기법으로 각 변수에 할당합니다
        setTodo({...todo,[name] : value, id : todos.length + 1  })  
       
    }   //바꾼내용을 전달하는 함수 
        // todo 을  spread 문법을 사용해서 기존의 todo 변수는 건들이지 않고 현재객체에 새로운 todo변수를 넣습니다
        // name : value 는 e.target을 통해서 저장된 값을 name변수 에 그대로 적용시킵니다.
        // id : todos.length 에 1을 더해준 이유는 기존에 working 쪽 데이터가 한개 있기때문에 그다음부터 데이터를 삽입하기위해서 +1 을 해줍니다 
        // 만약에 todos 변수(data)에 아무런 값도 지정하지 않았다면 1을 더해주지 않아도 됩니다.  
        // setTodo 함수를 통해서 변경된 send_date 함수를 form을 통해  전송하게되면 Todo component에 입력한 값이 전달됩니다.



    function onsubmithandler (e){ //폼전송 컨트롤 함수
        e.preventDefault(); // 폼을 전송했을때 새로고침 방지
        setTodos([...todos,todo]);  //todos 변수를 spread문법을 통해 새로운 복사된 객체를  생성해준뒤 todo 변수와 합합니다.
        console.log(todos.length);  // 초기에는 todos의 길이값이 2였다가 데이터가 추가될때마다 1씩 더해집니다.
        setTodo(data); //추가하기를 누를때  데이터가 비워짐
    }



return(
    <form className='add-form' onSubmit={onsubmithandler} >
        {/* 입력내용을  전송 */}
        <div className='input-group'>
            <label className='form-lable'>제목</label>
            <input type="text" name="title" className="add-input input-body"
           onChange={ send_date} value={todo.title}/>
           {/* value 값이 '' 인상태에서 입력한뒤 send_date 함수를 통해서  전송
           todo.title 은 입력되어지는 값 */}

            <label className='form-lable'>내용</label>
            <input type="text" name="body" className="add-input" 
              onChange={ send_date}  value={todo.body} />
              
        </div>
        <button className="add-button">추가하기</button>
    </form>
)

}

export default Form;