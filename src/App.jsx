import { Route, Routes } from 'react-router'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/carteira"} element={<h1>Home</h1>}/>
    </Routes>
   
  )
}

export default App
