import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import SearchBar from "../search-bat/SearchBar.jsx";

const Layout = () => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Header />
    <SearchBar />
    <main style={{ flex: 1, padding: "1rem" }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
