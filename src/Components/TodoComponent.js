import { CancelSharp } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const SpanTag = styled.div` 
 opacity: 0
`
const TodoBodyMiddle = styled.div` 
  display:flex;
  width: 100%;
  align-items: center;
  background-color:${(props) => !props.colorMode ? "#25273C" : '#fcfcfc'};
  color:${(props) => !props.colorMode ? "#fcfcfc" : '#25273C'};
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  margin:0px 0px 6px 0px;
  &:hover ${SpanTag}{
    opacity:1;
  }

`

const TodoBodyMiddleDiv = styled.div`
 flex: 1;
 margin-left: 5px;
 max-width:90%;
 font-size: 15px;
 font-weight: normal;
 margin-left: 10px;
 text-overflow: ellipsis;
 overflow:hidden;
text-decoration:${(props) => props.strike ? "line-through" : ''};
color:${(props) => props.strike ? "#ccc" : ''};
flex-wrap: no-none;
`
const TodoBodyMiddleCheck = styled.input`
  margin-left: 10px;
 font-size: 15px;
 width: 15px;
 height: 15px;
 border: 2px solid black;
 &:after {
  width: 10.5px;
  height: 10.5px;
  border-radius: 15px;
  top: 0.5px;
  left: -0.1px;
  background-color:${(props) => props.colored ? "#B069EB" : '#fff'};
  position: relative; 
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

&:checked:after {
  width: 10.5px;
  height: 10.5px;
  border-radius: 15px;
  top: 0.5px;
  left: -0.1px;
  position: relative;
  background-color:${(props) => props.colored ? "#B069EB" : '#fff'};
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
`

const TodoComponent = ({ todo, index, removeTodo, toggleTodoState, mode }) => {

  const deleteTodo = (index) => {
    removeTodo(index)
  }
  const toggleCompleted = (index) => {
    todo.isCompleted = !todo.isCompleted
    toggleTodoState(index, todo)
  }
  return (
    <TodoBodyMiddle colorMode={mode}>
      <TodoBodyMiddleCheck colored={todo.isCompleted} type="radio" onClick={() => toggleCompleted(index)}>
      </TodoBodyMiddleCheck>
      <TodoBodyMiddleDiv strike={todo.isCompleted}>
        {todo.value}
      </TodoBodyMiddleDiv>
      <SpanTag>
        <CancelSharp onClick={() => deleteTodo(index)} color={mode ? 'disabled' : "secondary"} fontSize="small"></CancelSharp>
      </SpanTag>
    </TodoBodyMiddle>
  )
}

export default TodoComponent
