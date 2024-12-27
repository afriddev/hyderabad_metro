import { useState } from "react";
import { RiTrainLine } from "react-icons/ri";

interface SearchableDropDownInterface {
  placeHolder: string;
  data: {
    stationName: string[];
    lineNo: number;
    stationNo: number;
  }[];
  value?: string;
}

function SearchableDropDown({
  data,
  placeHolder,
  value,
}: SearchableDropDownInterface) {
  const [clicked, setClicked] = useState<boolean>(false);

  function handleClick(value: boolean) {
    setClicked(value);
  }

  return (
    <div>
      <div
        className="relative flex items-center"
        onClick={() => {
          handleClick(true);
        }}
      >
        <RiTrainLine className="absolute  text-black left-2 h-6 w-6" />
        <input
          className={`w-full pl-9 h-12 px-3 text-black outline-none border border-black ${
            clicked ? "rounded-t-md" : "rounded-md"
          } `}
          placeholder={placeHolder}
        />
      </div>
      <div>
        {data?.length > 0 && clicked && (
          <div className=" overflow-auto border-x border-b flex flex-col gap-[0.1rem] border-black max-h-[40vh] p-[0.1rem]  text-black bg-white">
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` py-1 flex items-center  bg-gray-100 `}
                >
                  <div
                    className={`w-2 ml-2 relative h-2 ${
                      item?.lineNo === 1
                        ? "bg-red-400"
                        : item?.lineNo === 2
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }  rounded-full`}
                  ></div>
                  <div className="ml-6 w-[25vw]">
                    {` ${item?.stationName[0]} - ${item?.stationName[1]} - ${item?.stationName[2]}`}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {(!data || data?.length <= 0) && clicked && (
          <div className="ease-in duration-1000 text-black items-center border-x border-b border-black justify-center flex bg-white w-full py-2">
            No Results!
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchableDropDown;
