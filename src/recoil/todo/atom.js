import { atom } from 'recoil'

const todoListAtom = atom({
  key: 'TodoList',
  default: [],
})

const todoListFilterAtom = atom({
  key: 'TodoListFilter',
  default: 'Show All',
})

export {todoListAtom, todoListFilterAtom}