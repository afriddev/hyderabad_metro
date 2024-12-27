import { useMutation } from "@tanstack/react-query";
import { getAllStationsAPI } from "../services/stationApis";

export function useGetAllStations(){
    const {mutate:getAllStations,isPending} = useMutation({
        mutationFn:()=>getAllStationsAPI()
    })

    return {
        isPending,getAllStations
    }


}