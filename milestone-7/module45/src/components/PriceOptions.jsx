import React from 'react'
import PriceOption from './PriceOption';

const PriceOptions = () => {

 const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: "$30/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Shower facilities",
          "Free Wi-Fi",
          "Basic fitness assessment",
        ],
      },
      {
        id: 2,
        name: "Standard Membership",
        price: "$50/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Sauna access",
          "Towel service",
          "Nutritional counseling session (1/month)",
        ],
      },
      {
        id: 3,
        name: "Premium Membership",
        price: "$80/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Personal training sessions (2/month)",
          "Smoothie bar access",
          "Priority booking for facilities",
          "Access to swimming pool",
          "Discounts on merchandise",
        ],
      },
      {
        id: 4,
        name: "VIP Membership",
        price: "$120/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Personal training sessions (4/month)",
          "Sauna access",
          "Access to swimming pool",
          "Discounts on merchandise",
          "Complimentary gym apparel",
        ],
      },
      {
        id: 5,
        name: "Student Membership",
        price: "$25/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Student discount",
          "Free Wi-Fi",
        ],
      },
      {
        id: 6,
        name: "Family Membership",
        price: "$100/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Access for up to 4 family members",
          "Sauna access",
          "Towel service",
        ],
      },
      {
        id: 7,
        name: "Senior Membership",
        price: "$20/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Senior discount",
          "Free Wi-Fi",
        ],
      },
      {
        id: 8,
        name: "Corporate Membership",
        price: "$70/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Corporate discount",
          "Priority booking for facilities",
        ],
      },
      {
        id: 9,
        name: "Couple Membership",
        price: "$90/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Access for 2 individuals",
          "Towel service",
        ],
      },
      {
        id: 10,
        name: "Weekend Membership",
        price: "$20/month",
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Weekend access only",
          "Group fitness classes",
        ],
      },
    ];

  return (
    <div>
      <h2 className="text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient text-center py-3">
        Best Prices in the town
      </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:px-10 xl:px-24">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id} />
        ))}
      </div>
    </div>
  );
}

export default PriceOptions