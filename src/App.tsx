import { Box } from "@chakra-ui/react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Layout from "./components/Layout/Layout";
import Reply from "./pages/reply";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/reply"
          element={
            <Layout>
              <Reply />
            </Layout>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail-thread/:id" element={<Box>Not Found</Box>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
