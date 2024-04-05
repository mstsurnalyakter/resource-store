import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";

const Home = () => {
  const [value, setValue] = useState("");
  const { data, loading } = useDonationData();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleSearch = () => {
    if (value.trim() !== "") {
      const filtered = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filtered);
    } else {
      setFilterData(data);
    }
  };

  return (
    <div>
      <Banner value={value} setValue={setValue} handleSearch={handleSearch} />
      <CategoryList loading={loading} filterData={filterData} />
    </div>
  );
};

export default Home;
