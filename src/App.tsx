import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
function App() {
   return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
      </div>
    </HashRouter>
);}

export default App;