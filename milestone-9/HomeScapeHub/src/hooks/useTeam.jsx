import { useEffect, useState } from "react";


const useTeam = () => {
   const [teamData, setTeamData] = useState([]);

   const [dataLoading, setDataLoading] = useState(true);

   useEffect(() => {
     const loadData = async () => {
       try {
         setDataLoading(true);
         const res = await fetch("/team.json");
         if (!res.ok) {
           throw new Error("Fail to data fetch");
         }
         const fetchData = await res.json();
         setTeamData(fetchData);
         setDataLoading(false);
       } catch (error) {
         console.log(error);
       }
     };
     loadData();
   }, []);

   return { teamData, dataLoading };
}

export default useTeam