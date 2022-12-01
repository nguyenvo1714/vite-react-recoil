import { useRecoilValue } from "recoil"
import { todoListWithStats } from "../../../recoil/todo"

function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListWithStats)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul className="todo-stats">
      <li className="todo-stats__item">
        <label className="todo-stats__label">Total items: </label><span className="todo-stats__label">{totalNum}</span>
      </li>
      <li className="todo-stats__item">
        <label className="todo-stats__label">Items completed: </label><span className="todo-stats__label">{totalCompletedNum}</span>
      </li>
      <li className="todo-stats__item">
        <label className="todo-stats__label">Items not completed: </label><span className="todo-stats__label">{totalUncompletedNum}</span>
      </li>
      <li className="todo-stats__item">
        <label className="todo-stats__label">Percent completed: </label><span className="todo-stats__label">{formattedPercentCompleted}</span>
      </li>
    </ul>
  )
}

export default TodoListStats