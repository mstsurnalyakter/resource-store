
// import useDonationData from '../../Hooks/useDonationData';
import CardDefault from '../Card/CardDefault';
import CustomSpinner from '../CustomSpinner/CustomSpinner';

const CategoryList = ({ filterData, loading }) => {
 if (loading) {
  return <CustomSpinner/>
 }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto max-w-7xl mt-16 px-10 lg:px-5">
      {filterData.map((item) => (
        <CardDefault key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryList