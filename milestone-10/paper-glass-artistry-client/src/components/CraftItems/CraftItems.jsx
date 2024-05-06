
import useCraftItems from '../../hooks/useCraftItems';
import CraftItemCard from '../CraftItemCard/CraftItemCard';

const CraftItems = () => {
     const { data } = useCraftItems();

  return (
    <div>
      <h1 className="bg-gradient-to-r mt-10 text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        Craft Items
      </h1>

      <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
        {data?.length &&
          data?.slice(0,8).map((item) => (
            <CraftItemCard key={item?._id} item={item} />
          ))}
      </div>
    </div>
  );
}



export default CraftItems