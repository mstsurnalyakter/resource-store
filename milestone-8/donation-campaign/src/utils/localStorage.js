import { toast } from "react-toastify";

const getStoredDonation = () => {
  const getDonation = localStorage.getItem("donation");
  if (getDonation) {
    return JSON.parse(getDonation)
  }
  return [];
};

const saveDonation = id =>{
    const getDonation = getStoredDonation();

    const isExist = getDonation.find(donation => donation === id);
    if (isExist) {
      toast.warn("Already Donate!");
    }else{
        getDonation.push(id);
        localStorage.setItem("donation",JSON.stringify(getDonation));
         toast.success("Donation Added Successfully!");
    }
}

export { getStoredDonation, saveDonation };

// export const saveDonationToLS = id =>{
//     const saveData = JSON.parse(localStorage.getItem("donation") || []);
//     const isExist = saveData.find(item => item.id === id);
//     if (isExist) {
//         return alert("Already donate");
//     }else{
//         saveData.push(id);
//         localStorage.setItem("donation", JSON.stringify(saveData));
//     }

// }
