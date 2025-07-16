import { lazy, Suspense } from "react";
import Layout from "./components/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Collections = lazy(() => import("./pages/Collections"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:Id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="placeOrder" element={<PlaceOrder />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
