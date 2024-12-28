import { useEffect, useState } from "react";
import { useGetAllStations } from "../../hooks/stationHooks";
import AppSpinner from "../apputils/AppSpinner";
import SearchableDropDown from "../apputils/SearchableDropDown";
import { searchableDropDownType } from "../../types/appDatatypes";

function SelectStationsCard() {
  const { isPending, getAllStations } = useGetAllStations();
  const [allStations, setAllStations] = useState(undefined);
  const [fromStationDetails, setFromStationDetails] = useState<
    searchableDropDownType | undefined
  >(undefined);
  const [toStationDetails, setToStationDetails] = useState<
    searchableDropDownType | undefined
  >(undefined);
  const [fromStationInputClicked, setFromStationClicked] =
    useState<boolean>(false);
  const [toStationInputClicked, setToStationClicked] = useState<boolean>(false);

  useEffect(() => {
    getAllStations(undefined, {
      onSuccess(data) {
        if (data?.message === "SUCCESS") {
          if (data?.data?.length > 0) {
            setAllStations(data?.data);
          }
        }
      },
    });
  }, []);

  function handleFromStationClick(value: searchableDropDownType) {
    setFromStationDetails(value);
  }

  return (
    <div className="w-full h-full border-2 border-white rounded-xl">
      <div className="mt-20  px-10">
        <SearchableDropDown
          data={allStations as never}
          placeHolder="From Station"
          ontrigger={handleFromStationClick}
          clicked={fromStationInputClicked}
        />
      </div>

      {isPending && <AppSpinner />}
    </div>
  );
}
export default SelectStationsCard;
