
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Reply from "./pages/reply";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`reply/${29}`} element={<Reply />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
