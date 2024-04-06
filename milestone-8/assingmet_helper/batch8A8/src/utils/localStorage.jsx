import { toast } from "react-toastify";

const getDonationFromLS = () =>{
    const donationId = localStorage.getItem("donationId");

    return donationId ? JSON.parse(donationId) : [];
}


const saveDonationIdToLS = id =>{
    const getDonationId = getDonationFromLS();
    const isExist = getDonationId.find(donationId => donationId  === id);

    if (isExist) {
         toast.warn("Already donate");
    }else{
        getDonationId.push(id);
        localStorage.setItem("donationId",JSON.stringify(getDonationId));
         toast.success("Donation Added Successfully!");
    }
}

export {getDonationFromLS,saveDonationIdToLS}