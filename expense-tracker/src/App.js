import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Single from "./pages/Single";
import New from "./pages/New";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}>
              <Route path="user:Id" element={<Single />}></Route>
            </Route>
            <Route path="expenses" element={<Single />}>
              <Route path="new" element={<New></New>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
