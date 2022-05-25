import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import ReducersProvider from "./Contexts/reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/Features/SideBar/SideBar";
import PrivateRoutes from "./Components/Features/Private Routes/private-routes";

const AppRouter = () : JSX.Element => {
  return (
    <BrowserRouter>
      <ReducersProvider>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </ReducersProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
