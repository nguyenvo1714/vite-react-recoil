import { Link } from 'react-router-dom'
import TotoList from "../features/totos";

function Todo() {
  return (
    <>
      <TotoList />
      <p className="read-the-docs">
        Go back <Link to="/">Home</Link>
      </p>
    </>
  )
}

export default Todo