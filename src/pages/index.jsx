import { useState, lazy, Suspense } from 'react'
import reactLogo from './../assets/react.svg'
import { Link } from 'react-router-dom'
const HomeFeature = lazy(() => import('./../features/home'))

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="app__logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="app__logo app__logo--react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="app__card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeFeature />
      </Suspense>
      <p className="app__read-the-docs">
        Go to <Link to='/todo'>Todo</Link>
      </p>
    </div>
  )
}

export default Home