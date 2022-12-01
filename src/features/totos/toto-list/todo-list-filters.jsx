import { useRecoilState } from "recoil"
import { todoListFilterAtom } from "../../../recoil/todo"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom)

  const updateFilter = ({target: {value}}) => {
    setFilter(value)
  }

  return (
    <div className="todo-filters">
      <label className="todo-filters__label">Filter:</label>
      <TextField
        select
        value={filter}
        onChange={updateFilter}
        size="small"
      >
        <MenuItem value="Show All">All</MenuItem>
        <MenuItem value="Show Completed">Completed</MenuItem>
        <MenuItem value="Show Uncompleted">Uncompleted</MenuItem>
      </TextField>
    </div>
  )
}

export default TodoListFilters