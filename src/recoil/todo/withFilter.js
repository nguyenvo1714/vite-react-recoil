import { selector } from 'recoil'
import {todoListAtom, todoListFilterAtom} from "./atom";

const todoListWidthFilter = selector({
  key: 'TodoListWithFilter',
  get: ({get}) => {
    const filter = get(todoListFilterAtom)
    const list = get(todoListAtom)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isCompleted)
      case 'Show Uncompleted':
        return list.filter((item) => !item.isCompleted)
      default:
        return list
    }
  }
})

export default todoListWidthFilter