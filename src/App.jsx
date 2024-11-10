import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import pizzas from "./pizzas.json";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />

          <Route path="/cart" element={<Cart pizzas={pizzas} />} />

          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
