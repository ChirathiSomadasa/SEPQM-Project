import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import User from "./pages/user/User";
import CreateUser from "./pages/user/CreateUser";
import UpdateUser from "./pages/user/UpdateUser";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>      
        <Route path="/" element={<User />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;