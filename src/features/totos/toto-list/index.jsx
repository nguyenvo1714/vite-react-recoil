import { useRecoilValue } from "recoil"
import {todoListWidthFilter} from "../../../recoil/todo"
import TodoItemCreator from "../todo-item-creator"
import TodoItem from "./todo-item"
import TodoListFilters from "./todo-list-filters"
import TodoListStats from "./todo-list-stats";
import Divider from "@mui/material/Divider";

function TotoList() {
  const todoList = useRecoilValue(todoListWidthFilter)

  return (
    <div className="todo">
      <h1>Todo application</h1>

      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      <Divider className="todo__divider" />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TotoList