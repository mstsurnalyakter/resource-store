import PropTypes from "prop-types";
import CardDefault from "../CardDefault/CardDefault";

const CategoryList = ({ filterData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-10 lg:px-5">
      {filterData.map((item) => (
        <CardDefault item={item} key={item.id} />
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  filterData: PropTypes.array.isRequired,
};

export default CategoryList;
