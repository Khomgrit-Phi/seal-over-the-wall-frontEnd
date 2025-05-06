import { BiSearch } from "react-icons/bi";
const ExpandingSearch = () => {
  return (
    <>
      <div class="search-bar">
        <input
          type="search"
          class="search-input"
          placeholder="Search here..."
          tabindex="0"
          className="bg-transparent text-white border-none outline-none "
         
          
        />
        <button class="search-submit" tabindex="0">
          <BiSearch className="w-6 h-6 " />
        </button>
      </div>
    </>
  );
};
export default ExpandingSearch;
