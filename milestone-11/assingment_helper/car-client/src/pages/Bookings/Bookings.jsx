import useContextData from "../../hooks/useContextData";
import { useEffect, useState } from "react";
import BookingsRow from "./BookingsRow";
import axios from "axios";
import toast from "react-hot-toast";

const Bookings = () => {
  const { user } = useContextData();
  const [bookings, setBookings] = useState([]);
  const [loading,setLoading] = useState(false)

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(()=>{

       const getData = async () =>{
        try {
            setLoading(true);
          const { data } = await axios.get(url,{withCredentials:true});
          setBookings(data);
          setLoading(false)
        } catch (error) {
          toast.error(error.message);
        }
       }
       getData()
  },[url])

  console.log(bookings);

  if (loading) {
    return <h1 className="mt-20 text-center text-5xl font-bold">Loading...............</h1>
  }
const handleDelete = async id =>{
  try {
    const proceed = confirm("Are You sure you want to delete!");
    if (proceed) {
      const { data } = await axios.delete(
        `http://localhost:5000/bookings/${id}`
      );
      if (data.deletedCount > 0) {
        toast.success("Successful booking delete!");
        const remaining = bookings.filter((booking) => booking._id !== id);
        setBookings(remaining);
      }
    }
  } catch (error) {
    toast.error(error.message)
  }
}

const handleBookingConfirm = async id =>{
  try {
    const { data } = await axios.patch(`http://localhost:5000/bookings/${id}`, {
      status: "confirm"
    });
    if (data.modifiedCount > 0) {
      toast.success("Booking update successfully.")
      const remaining = bookings.filter((booking) => booking._id !== id);
      const update = bookings.find((booking) => booking._id === id);
      update.status = "confirm";
      setBookings([update, ...remaining]);
    }
  } catch (error) {
toast.error(error.message)
  }
}

  // const handleBookingConfirm = (id) => {
  //   fetch(`http://localhost:5000/bookings/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ status: "confirm" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         //update state
  //         const remaining = bookings.filter((booking) => booking._id !== id);
  //         const update = bookings.find((booking) => booking._id === id);
  //         update.status = "confirm";
  //         setBookings([update, ...remaining]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <h2 className="text-center text-5xl">My Bookings: {bookings?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingsRow
                handleDelete={handleDelete}
                key={booking?._id}
                booking={booking}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Bookings.propTypes = {};

export default Bookings;
