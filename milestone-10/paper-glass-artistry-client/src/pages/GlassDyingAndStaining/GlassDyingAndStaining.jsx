import  { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import useCraftItems from '../../hooks/useCraftItems';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import Card from '../../components/Card/Card';

export const GlassDyingAndStaining = () => {


     const { data, isLoading, refetch } = useCraftItems();
     const [items, setItems] = useState([]);

     useEffect(() => {
       const filterData = data?.filter(
         (item) => item.subcategory_Name === "Glass Dying & Staining"
       );
       setItems(filterData);
     }, [data, refetch]);

     if (isLoading) {
       return (
         <div className="flex items-center justify-center mt-44">
           <Spinner />
         </div>
       );
     }

     return (
       <div>
         <DynamicTitle pageTitle="Glass Dying & Staining" />
         <h1 className="bg-gradient-to-r mt-10 text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
           Glass Dying & Staining
         </h1>

         <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
           {items?.length &&
             items?.map((item) => (
               <Card key={item?._id} item={item} />
             ))}
         </div>
       </div>
     );
}
