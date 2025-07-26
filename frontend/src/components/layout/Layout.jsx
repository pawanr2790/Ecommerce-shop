import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import { ToastContainer } from "react-toastify";

const Layout = () => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Header />
    <SearchBar />
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
    <Footer />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      pauseOnHover
      draggable
      theme="colored"
    />
  </div>
);

export default Layout;
