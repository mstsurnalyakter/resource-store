import PropTypes from "prop-types";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useEffect, useState } from "react";
import useDonationData from "../../Hooks/useDonationData";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const Home = () => {
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { data, loading } = useDonationData();
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleSearch = () => {
    if (value.trim() !== "") {
      const filtered = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filtered);
    }else{
      setFilterData(data)
    }
  };

  return (
    <div>
      <Banner value={value} handleSearch={handleSearch} setValue={setValue} />

      {
        loading && <CustomSpinner/>
      }
      <CategoryList filterData={filterData} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
