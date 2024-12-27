import { RiTrainLine } from "react-icons/ri";



function SearchableDropDown() {
  return (
    <div className="">
      <div className="relative flex items-center">
        <RiTrainLine className="absolute  text-black left-2 h-6 w-6" />
        <input
          className=" w-full pl-9 h-12 rounded-md px-3 text-black outline-none"
          placeholder="From Station"
        />
      </div>
    </div>
  );
}

export default SearchableDropDown;
