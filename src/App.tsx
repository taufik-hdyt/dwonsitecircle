import Home from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Reply from "./pages/reply";
import { useState, useEffect, ReactNode } from "react";
import { API } from "./libs/api";
import { Spinner } from "@chakra-ui/react";


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  async function authCheck() {
    try {
      await API.get("/auth/check");
      setLoading(false);
    } catch (error) {
      localStorage.clear();
      return <Navigate to={"/login"} />;
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authCheck();
    } else {
      setLoading(false);
    }
  }, []);

  function IsLogged({ children }: { children: ReactNode }) {
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      return children;
    }
    return <Navigate to={"/login"} />;
  }

  function IsNotLogged({ children }: { children: ReactNode }) {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      return children;
    }
    return <Navigate to={"/"} />;
  }

  return (
    <BrowserRouter>
      {
      loading && <Spinner color='white' size='lg'  />
    }
      <Routes>
        <Route
          path="/register"
          element={
            <IsNotLogged>
              <Register />
            </IsNotLogged>
          }
        />
        <Route
          path="/login"
          element={
            <IsNotLogged>
              <Login />
            </IsNotLogged>
          }
        />

        <Route
          path={`reply/${29}`}
          element={
            <IsLogged>
              <Reply />
            </IsLogged>
          }
        />
        <Route
          path="/"
          element={
            <IsLogged>
              <Home />
            </IsLogged>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
