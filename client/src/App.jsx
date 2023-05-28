// import Navbar from "../components/navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Signin from "./pages/auth/signin/Signin";
import "./App.css";
import CreateStudent from "./pages/auth/createStudent/CreateStudent";
import CreateAdmin from "./pages/auth/createAdmin/CreateAdmin";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.withCredentials = true;

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth/signin" element={<Signin />}></Route>
          <Route path="auth/createStudent" element={<CreateStudent />}></Route>
          <Route path="auth/createAdmin" element={<CreateAdmin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
