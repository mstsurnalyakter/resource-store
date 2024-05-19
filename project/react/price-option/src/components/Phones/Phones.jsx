import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio, Grid } from "react-loader-spinner";

const Phones = () => {
    const [phones,setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        // const phonesFetch = async () =>{
        //     try {
        //         const res = await fetch(
        //           "https://openapi.programming-hero.com/api/phones?search=iphone"
        //         );
        //         if (!res.ok) {
        //             throw new Error("Failed to load phones")
        //         }
        //         const objData = await res.json();
        //         const data = objData.data;
        //         setPhones(data)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // phonesFetch()

        axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone"
        )
        .then(data=>{
            const phoneData = data.data.data;
            console.log(phoneData);
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj = {
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData)
            setLoading(false)
        })
    },[])
    // console.log(phones);
  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Grid
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      )}
      <h2>Phones:{phones.length}</h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
}

Phones.propTypes = {}

export default Phones