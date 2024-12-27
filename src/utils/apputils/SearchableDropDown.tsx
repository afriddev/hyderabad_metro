import { RiTrainLine } from "react-icons/ri";

interface SearchableDropDownInterface {
  placeHolder: string;
  data:
    | {
        id: number;
        stationName: string[];
        lineNo: number;
        stationNo: number;
      }[]
    | undefined;
  value?: string;
}

function SearchableDropDown({
  data,
  placeHolder,
  value,
}: SearchableDropDownInterface) {
  return (
    <div className="">
      <div className="relative flex items-center">
        <RiTrainLine className="absolute  text-black left-2 h-6 w-6" />
        <input
          className=" w-full pl-9 h-12 rounded-md px-3 text-black outline-none"
          placeholder={placeHolder}
        />
      </div>
      <div>
        {

        }
        {
            (!data || data?.length <= 0 ) && <div>No Results!</div>
        }
      </div>
    </div>
  );
}

export default SearchableDropDown;
