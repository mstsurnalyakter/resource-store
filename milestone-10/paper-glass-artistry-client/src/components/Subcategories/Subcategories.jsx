
import useSubcategory from '../../hooks/useSubcategory'
import Subcategory from '../Subcategory/Subcategory';

const Subcategories = () => {
  const { data} = useSubcategory();
  return (
    <div>
      <h1 className="bg-gradient-to-r mt-10 text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        Art & Craft Categories
      </h1>

      <div className="grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 ">
        {data?.length &&
          data?.map((item) => <Subcategory key={item?._id} item={item} />)}
      </div>
    </div>
  );
}


export default Subcategories