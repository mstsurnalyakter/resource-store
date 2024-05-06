import { useQuery } from "@tanstack/react-query";
import useContextData from "./useContextData";
import { baseURL } from "../utilities/url";

const useMyArtAndCraftList = () => {

    const {user} = useContextData()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myArtAndCraftList"],
    queryFn: async () => {
      const res = await fetch(
        `${baseURL}/paperGlasses/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useMyArtAndCraftList;
