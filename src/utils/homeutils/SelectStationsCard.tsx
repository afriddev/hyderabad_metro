import { useEffect, useState } from "react";
import { useGetAllStations } from "../../hooks/stationHooks";
import AppSpinner from "../apputils/AppSpinner";
import SearchableDropDown from "../apputils/SearchableDropDown";

function SelectStationsCard() {
  const { isPending, getAllStations } = useGetAllStations();
  const [allStations,setAllStations] = useState(undefined)

  useEffect(() => {
    getAllStations(undefined, {
      onSuccess(data) {
        if (data?.message === "SUCECSS") {
          if(data?.data?.length > 0 ){
            setAllStations(data?.data)
          }
        }
      },
    });
  }, []);

  return (
    <div className="w-full h-full border-2 border-white rounded-xl">
      <div className="mt-20  px-10">
        <SearchableDropDown data={allStations } placeHolder="From Station" />
      </div>

      {isPending && <AppSpinner />}
    </div>
  );
}
export default SelectStationsCard;
