import { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import headerBg from '../bg-desktop-light.jpg'
import headerDarkBg from "../bg-desktop-dark.jpg"
import cresentIcon from '../moon-waning-crescent.png'
import sunIcon from '../white-balance-sunny.png'
import TodoComponent from '../Components/TodoComponent'

const Container = styled.div`
  position: relative;
  background-color:${(props) => !props.colored ? "#333" : '#fff'};
  width: 100vw;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center
`
const TodoHeader = styled.div`

`
const Image = styled.img`

`
const TodoContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  width: 50%;
  height: 80vh;
  position: absolute;
  top: 10%;
  ${mobile({
    width: '80vw',

  })}
`
const TodoBodyTop = styled.div` 
  background-color: transparent;
  padding: 8px 4px;
  display:flex;
  width: 100%;
  justify-content: space-between;
  color: white
  
`
const Icon = styled.img` 
width:20px;
height: 20px;
object-fit: cover;
cursor:pointer;
&:hover{
  transform:scale(1.1)
}

`
const TodoBodyTopLeft = styled.div` 
  font-size: 30px;
  font-weigth: bolder;
`
const TodoBodyTopRight = styled.div` 
  font-size: 30px;
  font-weigth: bolder;
`

const TodoBodyMiddle = styled.form` 
  padding: 15px 4px;
  display:flex;
  width: 100%;
  align-items: center;
  background-color:${(props) => !props.colored ? "#25273C" : '#fff'};
  border-radius: 5px;
  margin: 15px 0
`
const TodoBodyMiddleInput = styled.input`
 flex-1;
 width: 90%;
 border: none;
 outline: none;
 margin-left: 5px;
 font-size: 15px;
 font-weight: 300;
 background-color:${(props) => !props.colored ? "#25273C" : '#fff'};
 color:${(props) => !props.colored ? "#fff" : '#25273C'};

`
const TodoBodyMiddleCheck = styled.input`
  margin-left: 10px;
 font-size: 15px;
 font-weight: 300;
 width: 15px;
 height: 15px;
 &:checked{
  background-color: red;
};
`
const TodoBodyBottom= styled.div` 
padding: 15px 4px;
display:flex;
min-height: 50vh;
width: 100%;
flex-direction: column;
font-size: 20px;
font-weight: normal;
background-color:${(props) => !props.colored ? "#25273C" : '#fcfcfc'};
color:${(props) => !props.colored ? "#fcfcfc" : '#25273C'};
border-radius: 5px;
box-shadow: -2px 0px 4px 2px #ccc;
max-height: 80vh;
overflow-y: auto;
`

const Body = styled.div` 

`
const Footer = styled.div` 
display: flex;
height: 3rem;
align-items: center;
justify-content:space-around;
width: 100%;
color:${(props) => !props.colored ? "#555" : '#fff'};

`
const FooterLeft = styled.div` 
font-size: 12px;
color:${(props) => !props.colored ? "#fff" : '#555'};
${mobile({
  display: "none",
})}
`
const FooterCenter = styled.div` 
display: flex;
align-items: center;
justify-content: space-around;
width: 35%;
padding: 0 35px


`
const FooterRight = styled.div` 
cursor: pointer;
font-size: 12px;
color:${(props) => !props.colored ? "#fff" : '#555'};
&:hover{
  color: blue;
  transform: scale(1.1)
}
`
const All = styled.div` 
 cursor: pointer;
  font-size: 12px;
 color:${(props) => !props.colored ? "#fff" : '#555'};
 &:hover{
  color: blue;
  transform: scale(1.1)
}
`
const Active = styled.div` 
cursor: pointer;
font-size: 12px;
color:${(props) => !props.colored ? "#fff" : '#555'};
&:hover{
  color: blue;
  transform: scale(1.1)
}
`
const Completed = styled.div` 
cursor: pointer;
font-size: 12px;
color:${(props) => !props.colored ? "#fff" : '#555'};
&:hover{
  color: blue;
  transform: scale(1.1)
}
`



const Todo = () => {
  const [todos, setTodos]=useState([])
  const [todoInput, setTodoInput] = useState('')
  const [filteredTodos, setFilteredTodos]=useState([])
  const [showFilter, setShowFilter]=useState(false)
  const [mode, setMode]=useState(true)
  const [showFilterActive, setShowFilterActive]=useState(false)
  const [showActive, setShowActive]=useState(false)


  const createTodo =(e)=>{
    e.preventDefault()
    if (todoInput) {
      const newTodo = {
        value:todoInput,
        isCompleted: false,
        active: false
      }
      setTodos((prevTodo)=>[...prevTodo, newTodo])
      
    }else{
      alert("please enter a todo item to add")
    }
  }

  const inputText= (e)=>{
    setTodoInput(e.target.value)
  }

  const removeTodo=(index)=>{
    setTodos(todos.filter((todo, i)=> i !== index))
  }

  const toggleTodoState=(index, newValue)=>{
    setTodos(todos.map((todo, i)=> i === index ? newValue : todo))
  }

  const filterCompleted=()=>{
    setShowActive(false)
    setShowFilter(true)
    setFilteredTodos(todos.filter((todo)=> todo.isCompleted))
  }
  const fetchAllActive= ()=>{
    setShowFilter(false)
    setShowActive(true)
    setShowFilterActive(todos.filter((todo)=> !todo.isCompleted))
  }
  const fetchAllTodos= ()=>{
    setShowFilter(false)
    setShowActive(false)
  }
  const clearCompleted= ()=>{
    setTodos(todos.filter((todo)=> !todo.isCompleted))
  }
  const toggleMode=()=>{
    setMode((prev)=>!prev)
  }
  // 25273C
  return (
    <Container colored={mode}>
      <Wrapper>
        <TodoHeader >
          {
            mode ? (
              <Image src={headerBg} alt="img" />
            ):(
              <Image src={headerDarkBg} alt="img" />
            )
          }
        </TodoHeader >

        <TodoContainer>
            <TodoBodyTop>
              <TodoBodyTopLeft>TODO</TodoBodyTopLeft>
              <TodoBodyTopRight>
              {
                mode ? (
                  <Icon onClick={toggleMode} src={cresentIcon} alt="img" />
                )
                : (
                <Icon onClick={toggleMode} src={sunIcon} alt="img" />
              )
              }
              
              </TodoBodyTopRight>
            </TodoBodyTop>

            <TodoBodyMiddle onSubmit={createTodo} colored={mode}>
              <TodoBodyMiddleCheck type="radio" disabled>
              </TodoBodyMiddleCheck>
              <TodoBodyMiddleInput colored={mode} type="text" placeholder="Create a new Todo.." onChange={inputText}>
              </TodoBodyMiddleInput>
            </TodoBodyMiddle>

            <TodoBodyBottom colored={mode}>
              <Body>
                {!showFilter && !showActive ? todos.map((todo, i)=>(
                    <TodoComponent mode={mode} key={i} todo={todo} index={i} removeTodo={removeTodo} toggleTodoState={toggleTodoState}></TodoComponent>
                ))
                : showFilter ? filteredTodos.map((todo, i)=>(
                  <TodoComponent mode={mode} key={i} todo={todo} index={i} removeTodo={removeTodo} toggleTodoState={toggleTodoState}></TodoComponent>
              ))
           
              :  showFilterActive.map((todo, i)=>(
                <TodoComponent mode={mode} key={i} todo={todo} index={i} removeTodo={removeTodo} toggleTodoState={toggleTodoState}></TodoComponent>
            ))
               
              }
              </Body>
                {todos.length ? (
                  <div>
                  <Footer>
                    {!showFilter && !showActive ?(
                      <FooterLeft colored={mode}>{todos.length > 1 ? todos.length + " items" : todos.length + " item" } left</FooterLeft>
                    ): showFilter ? (
                      <FooterLeft colored={mode}>{filteredTodos.length > 1 ? filteredTodos.length + " items" : filteredTodos.length + " item" } left</FooterLeft>
                    )
                    :<FooterLeft colored={mode}>{showFilterActive.length > 1 ? showFilterActive.length + " items" : showFilterActive.length + " item" } left</FooterLeft>
                    }
                    <FooterCenter >
                      <All colored={mode} onClick={fetchAllTodos}>All</All>
                      <Active colored={mode} onClick={fetchAllActive}>Active</Active>
                      <Completed colored={mode} onClick={filterCompleted}>Completed</Completed>
                    </FooterCenter>
                    <FooterRight colored={mode} onClick={clearCompleted}>Clear Completed</FooterRight>
                  </Footer>
                  </div>
                ): (
                  <div style={{textAlign:"center"}}>No todo</div>
                )}
            </TodoBodyBottom>
        </TodoContainer>

      </Wrapper>

    </Container>
  )
}

export default Todo
