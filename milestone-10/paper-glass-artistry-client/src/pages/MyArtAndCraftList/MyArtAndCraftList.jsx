import { useState } from "react";
import MyItemCard from "../../components/MyItemCard/MyItemCard";
import Spinner from "../../components/Spinner/Spinner";
import useMyArtAndCraftList from "../../hooks/useMyArtAndCraftList"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";

const MyArtAndCraftList = () => {
  const { data, isLoading, refetch } = useMyArtAndCraftList();
   const [open, setOpen] = useState(false);
   const [displayItems, setDisplayItems] = useState([]);
   const [toggle, setToggle] = useState(false);


   const handleItemFilter = (filter) => {
     if (filter === "all") {
       setDisplayItems(data);
       setToggle(true);
     } else if (filter === "Yes") {
       const yesItem = data.filter((item) => item.customization === "Yes");
       setDisplayItems(yesItem);
       setToggle(true);
     } else if (filter === "No") {
       const noItem = data.filter((item) => item.customization === "No");
       setDisplayItems(noItem);
       setToggle(true);
     }
   };



  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-44">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <DynamicTitle pageTitle="My Art & Craft Lists" />
      <h1 className="bg-gradient-to-r text-center py-10 font-bold text-4xl from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent bg-clip-text animate-gradient">
        My Art & Craft Lists
      </h1>

      <details className="dropdown">
        <summary onClick={() => setOpen(!open)} className="m-1 btn">
          <span className="bg-gradient-to-r from-[#3C87C7] via-purple-600 to-[#9856AC] bg-300% text-transparent animate-gradient bg-clip-text">
            Filter based on Customization
          </span>{" "}
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleItemFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleItemFilter("Yes")}>
            <a>Yes</a>
          </li>
          <li onClick={() => handleItemFilter("No")}>
            <a>No</a>
          </li>
        </ul>
      </details>

      {toggle ? (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
          {displayItems?.length >0 &&
            displayItems?.map((item) => (
              <MyItemCard refetch={refetch} key={item?._id} item={item} />
            ))}
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
          {data?.length >0 &&
            data?.map((item) => (
              <MyItemCard refetch={refetch} key={item?._id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}

export default MyArtAndCraftList