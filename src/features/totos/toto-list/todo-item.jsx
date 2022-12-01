import { useRecoilState } from "recoil"
import { todoListAtom } from "../../../recoil/todo"
import { removeItemAtIndex, replaceItemAtIndex } from "../../../utils/helpers"
import TextField from "@mui/material/TextField"
import Checkbox from '@mui/material/Checkbox'
import IconButton from "@mui/material/IconButton"
import Icon from '@mui/material/Icon'

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListAtom)
  const index = todoList.findIndex(listItem => listItem === item)

  const editItem = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div className="todo-item">
      <TextField
        variant="outlined"
        value={item.text}
        onChange={editItem}
        size="small"
      />
      <Checkbox
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <Icon className="material-icons">delete</Icon>
      </IconButton>
      {/*<button onClick={deleteItem}>X</button>*/}
    </div>
  )
}

export default TodoItem