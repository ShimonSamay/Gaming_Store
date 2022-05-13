import ReducersProvider from "./Contexts/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Features/SideBar/SideBar";
import Home from "./Components/Pages/Home/Home";
import MainLogin from "./Components/Pages/Main Login/Main-Login";
import Products from "./Components/Pages/Products/Products";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ReducersProvider>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<MainLogin/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </ReducersProvider>
    </BrowserRouter>
  );  
};

export default AppRouter;
