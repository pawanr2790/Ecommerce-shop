import { useDispatch, useSelector } from "react-redux";
import { setSearch, toggleShowSearch } from "../../features/ProductSlice";
import { assets } from "../../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { showSearch, search } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      {showSearch && location.pathname.includes("collections") && (
        <div className="border-t  border-gray-500 text-center">
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-6 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                e.preventDefault(), dispatch(setSearch(e.target.value));
              }}
              className="flex-1 outline-none bg-inherit text-sm"
            />
            <img src={assets.search_icon} alt="" className="w-4" />
          </div>
          <img
            src={assets.cross_icon}
            alt="Close"
            className="inline cursor-pointer w-3"
            onClick={() => dispatch(toggleShowSearch())}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
