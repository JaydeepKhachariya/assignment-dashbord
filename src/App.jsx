import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
