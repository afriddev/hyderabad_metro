/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { RiTrainLine } from "react-icons/ri";
import { searchableDropDownType } from "../../types/appDatatypes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchableDropDownInterface {
  placeHolder: string;
  data: searchableDropDownType[];
  ontrigger: (value: searchableDropDownType) => void;
  clicked: boolean;
}

function SearchableDropDown({
  data,
  placeHolder,
  ontrigger,
  clicked,
}: SearchableDropDownInterface) {
  const [dropDownData, setDropDownData] = useState<
    undefined | searchableDropDownType[]
  >(undefined);

  const [inputClicked, setInputClicked] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (data?.length > 0 && !dropDownData) {
      setDropDownData(data);
    }
  }, [data, clicked]);

  function handleSelectClick(value: searchableDropDownType) {
    ontrigger(value);
    setValue(`${value?.stationName[0]} - ${value?.stationName[1]}`);
    setInputClicked(false);
  }

  function handleInpuChange(e: any) {
    const value = e?.target?.value;
  }

  function handlePopoverChange(value: boolean) {
    if (!value) {
      setInputClicked(false);
    }
  }

  return (
    <div>
      <Popover open={inputClicked} onOpenChange={handlePopoverChange}>
        <PopoverTrigger className="w-[26vw]">
          <div
            onClick={() => {
              setInputClicked(true);
            }}
            className="relative flex items-center w-full"
          >
            <RiTrainLine className="absolute  text-black left-2 h-6 w-6" />
            <input
              onChange={(e) => {
                handleInpuChange(e);
              }}
              value={value}
              className={`w-full pl-9 h-12 px-3 text-black outline-none border border-black `}
              placeholder={placeHolder}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[26vw] rounded-none">
          <div className="overflow-y-auto overflow-auto overflow-x-auto h-[40vh]  cursor-pointer">
            {dropDownData && dropDownData?.length > 0 && (
              <div className="  p-[0.1rem]  text-black bg-white">
                {dropDownData?.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        handleSelectClick(item);
                      }}
                      key={index}
                      className={` py-1 flex items-center  bg-gray-100  hover:bg-gray-200 `}
                    >
                      <div
                        className={`w-2 ml-2 relative h-2  ${
                          item?.lineNo === 1
                            ? "bg-red-400"
                            : item?.lineNo === 2
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }  rounded-full `}
                      ></div>
                      <div className="ml-6 w-[25vw] cursor-pointer">
                        {` ${item?.stationName[0]} - ${item?.stationName[1]} - ${item?.stationName[2]}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {(!dropDownData || dropDownData?.length <= 0) && (
              <div className="ease-in duration-1000 text-black items-center border-x border-b border-black justify-center flex bg-white w-full py-2">
                No Results!
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default SearchableDropDown;
