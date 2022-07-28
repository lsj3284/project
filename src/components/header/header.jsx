import './style.css';


function Header () {   // header 부분은 div부분만 렌더링 되면 되기때문에 export 만 잘합시다
 
return(
    <div className="container">
        <div>My Todo List</div>
        <div>React</div>
    </div>
)

}

export default Header;