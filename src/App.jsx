import DisplayItem from "./component/DisplayItem/DisplayItem";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./component/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DisplayItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;