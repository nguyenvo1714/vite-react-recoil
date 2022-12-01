import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListAtom } from "../../recoil/todo"
import { getId } from "../../utils/helpers"
import Button from '@mui/material/Button'
import Icon from "@mui/material/Icon"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListAtom)

  const onChange = ({target: {value}}) => {
    setInputValue(value)
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      }
    ])
    setInputValue('');
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="form form--todo"
      onSubmit={e => e.preventDefault()}
    >
      {/*<input type="text" value={inputValue} onChange={onChange} />*/}
      <TextField
        label="Todo"
        variant="outlined"
        value={inputValue}
        onChange={onChange}
        size="small"
      />
      <Button
        onClick={addItem}
        variant="contained"
        startIcon={<Icon className="material-icons">save</Icon> }
      >
        Add
      </Button>
    </Box>
  )
}

export default TodoItemCreator