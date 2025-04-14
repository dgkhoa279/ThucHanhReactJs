import Admin from "../src/pages/Admin"
import {Routes,Route} from "react-router-dom"
import { publicRoutes } from "./routes/routes"
function App (){
  return (
    <Routes>
      {
        publicRoutes.map((route,index)=> (
          <Route path={route.path} element ={<route.component />} />
        ))
      }
    </Routes>
  )
}

export default App
