import './style.css';


function Layout (props) {  // 부모component(TodoList.jsx) 에서받은 todos 변수를 props 파라미터를 통해서 받음 
    console.log(props.todos);
return(
    <div className="layout">
      {props.children}  
      {/* 태그와 태그 사이의 모든 내용을 표시하기 위해 사용되는 특수한 props */}
     {/* TodoList.jsx 의 <Layout> ~ </Layout> 내부에 작성된 내용들을 화면에 표시합니다. */}

    </div>
)

}

export default Layout;