import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home, User, Car } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/car/:id' element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
