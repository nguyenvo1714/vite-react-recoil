import { selector } from "recoil"
import {todoListAtom} from "./atom";

const todoListWithStats = selector({
  key: 'TodoListWithStats',
  get: ({get}) => {
    const todoList = get(todoListAtom)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  }
})

export default todoListWithStats