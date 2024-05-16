// import { useEffect, useState } from "react";
// import ServiceCard from "./ServiceCard";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import toast from "react-hot-toast";

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [loading,setLoading] = useState(false);
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {

//     // const getData = async () =>{
//     //   try {
//     //     setLoading(true);
//     //     const { data } = await axiosSecure.get("/services");
//     //         setServices(data);
//     //         setLoading(false)
//     //   } catch (error) {
//     //     toast.error(error.message)
//     //   }

//     // }

//     // getData()

//     fetch("https://car-server-gamma.vercel.app/services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         .error(error);
//       });

//   }, []);

//   if (loading) {
//     return <h1 className="text-center mt-20 text-5xl font-bold">Loading....................</h1>
//   }

//   return (
//     <div>
//       <div className="text-center w-2/3  mx-auto space-y-4">
//         <h3 className="text-2xl font-bold text-[#FF3811]">Our Services</h3>
//         <h2 className="text-5xl font-bold">Our Services Area</h2>
//         <p>
//           the majority have suffered alteration in some form, by injected
//           humour, or randomised words which don't look even slightly believable.{" "}
//         </p>
//       </div>
//       <div className="grid mt-10 grid-cols-1 ga6 lg:grid-cols-3 md:grid-cols-2 gap-6">
//         {services.map((service) => (
//           <ServiceCard key={service._id} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // setLoading(true);
    // fetch("https://car-server-gamma.vercel.app/services")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setServices(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     .error(error);
    //   });

    const getData = async () => {
      try {
        setLoading(true);
        const url = "/services";
        const { data } = await axiosSecure.get(url);
        setServices(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [axiosSecure]);

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-5xl font-bold">
        Loading....................
      </h1>
    );
  }

  return (
    <div>
      <div className="text-center w-2/3  mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-[#FF3811]">Our Services</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid mt-10 grid-cols-1 ga6 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
