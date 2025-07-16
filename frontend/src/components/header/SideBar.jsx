import { NavLink } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
const SideBar = ({ visible, setVisible }) => {
  console.log(visible, setVisible);
  return (
    <div
      className="absolute  overflow-hidden bg-white inset-0 transition-all w-full"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="flex flex-col text-gray-600">
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="flex items-center gap-4 p-3 cursor-pointer"
        >
          <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
          <p>Back</p>
        </div>
        <NavLink to="/home" className="py-2 pl-6 border">
          HOME
        </NavLink>
        <NavLink to="/collections" className="py-2 pl-6 border">
          COLLECTIONS
        </NavLink>
        <NavLink to="/about" className="py-2 pl-6 border">
          ABOUT
        </NavLink>
        <NavLink to="/contact" className="py-2 pl-6 border">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
