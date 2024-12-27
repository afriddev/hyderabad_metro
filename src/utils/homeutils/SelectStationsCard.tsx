import { useEffect } from "react";
import { useGetAllStations } from "../../hooks/stationHooks";
import AppSpinner from "../apputils/AppSpinner";
import SearchableDropDown from "../apputils/SearchableDropDown";

function SelectStationsCard() {
  const { isPending, getAllStations } = useGetAllStations();

  useEffect(() => {
    getAllStations(undefined, {
      onSuccess(data) {
        if (data?.message === "SUCECSS") {
          console.log(data?.message);
        }
      },
    });
  }, []);

  return (
    <div className="w-full h-full border-2 border-white rounded-xl">
      <div className="mt-20  px-10">
        <SearchableDropDown />
      </div>

      {isPending && <AppSpinner />}
    </div>
  );
}
export default SelectStationsCard;
