import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages";

const Todo = React.lazy(() => import('./pages/todo'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='todo'
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <Todo />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default App
