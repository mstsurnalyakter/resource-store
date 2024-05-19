import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: 30,
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
        price: 50,
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
        price: 80,
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
        name: "Gold Membership",
        price: 100,
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
        name: "Platinum Membership",
        price: 150,
        features: [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker rental",
          "Group fitness classes",
          "Unlimited personal training",
          "Smoothie bar access",
          "Premium locker with towel service",
          "Access to exclusive events",
          "Free guest passes (2/month)",
        ],
      },
    ];


  return (
    <div className="m-12">
      <h2 className="text-5xl mb-5 text-center">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
}

export default PriceOptions