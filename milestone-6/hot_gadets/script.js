// const errorContainer = document.getElementById("error-container");
// const loadPhones = async (searchText = "iphone", isShowAll) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/phones?search=${searchText}`
//   );
//   const data = await res.json();
//   const phones = data.data;
//   if (phones.length === 0) {
//     errorContainer.classList.remove("hidden");
//   } else {
//     errorContainer.classList.add("hidden");
//   }

//   displayPhone(phones, isShowAll);
// };

// const displayPhone = (phones, isShowAll) => {
//   const cardContainer = document.getElementById("card-container");
//   const showAllBtnContainer = document.getElementById("show-all-btn-container");

//   cardContainer.textContent = "";

//   if (phones.length > 12 && !isShowAll) {
//     showAllBtnContainer.classList.remove("hidden");
//   } else {
//     showAllBtnContainer.classList.add("hidden");
//   }

//   if (!isShowAll) {
//     phones = phones.slice(0, 12);
//   }

//   phones.forEach((phone) => {
//     const card = document.createElement("div");
//     card.classList = `card bg-base-100 shadow-xl p-6`;

//     card.innerHTML = `
//         <figure class="bg-slate-100 py-5"><img src="${phone.image}" alt="Shoes" /></figure>
//         <div class="card-body text-center">
//           <h2 class="text-[#403F3F] text-2xl font-bold">${phone.phone_name}</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div class="card-actions justify-center">
//             <button onclick="handleShowDetails('${phone.slug}')" class="btn bg-[#0D6EFD] hover:bg-[#0D6EFD] text-white">Show Details</button>
//           </div>
//         </div>

//         `;
//     cardContainer.appendChild(card);
//   });
//   toggleLoadingSpinner(false);
// };

// const handleShowDetails = async (id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/phone/${id}`
//   );
//   const data = await res.json();
//   const phone = data.data;
//   showPhoneDetails(phone);
// };

// const showPhoneDetails = (phone) => {
//   const showDetailsContainer = document.getElementById(
//     "show-details-container"
//   );

//   showDetailsContainer.innerHTML = `
//         <figure class="bg-slate-100">
//             <img
//                 src="${phone.image}"
//                 alt="${phone.image}"
//             />
//             </figure>
//             <div class="card-body">
//             <h2 class="card-title">${phone?.name}</h2>
//             <p class="text-sm"> <span class="font-bold">Storage:</span> ${
//               phone?.mainFeatures?.storage
//             }</p>
//             <p class="text-sm"> <span class="font-bold">Display Size:</span> ${
//               phone?.mainFeatures?.displaySize
//             }</p>
//             <p class="text-sm"> <span class="font-bold">Chipset:</span> ${
//               phone?.mainFeatures?.chipSet
//             }</p>
//               <p class="text-sm"> <span class="font-bold">Memory:</span> ${
//                 phone?.mainFeatures?.memory
//               }</p>
//               <p class="text-sm"> <span class="font-bold">Slug:</span> ${
//                 phone?.slug
//               }</p>
//               <p class="text-sm"> <span class="font-bold">Release data :</span> ${
//                 phone?.releaseDate
//               }</p>
//               <p class="text-sm"> <span class="font-bold">Brand:</span> ${
//                 phone?.brand
//               }</p>
//                 <p class="text-sm"> <span class="font-bold">GPS:</span> ${
//                   phone?.others?.GPS || "No GPS Available"
//                 }</p>


//             </div>

//     `;

//   show_details_modal.showModal();
// };

// const handleSearch = (isShowAll) => {
//   toggleLoadingSpinner(true);
//   const searchField = document.getElementById("search-field");
//   const searchText = searchField.value || "iphone";
//   loadPhones(searchText, isShowAll);
// };



// const toggleLoadingSpinner = (isLoading) => {
//   const loaderContainer = document.getElementById("loader-container");
//   if (isLoading) {
//     loaderContainer.classList.remove("hidden");
//   } else {
//     loaderContainer.classList.add("hidden");
//   }
// };

// const handleShowAll = () => {
//   handleSearch(true);
// };

// loadPhones();

const showAllPhoneButton = document.getElementById("show-all-container");
const spinnerContainer = document.getElementById("spinner-container");

const loadPhone = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;

  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");

  phoneContainer.classList.add("bg-gray-100");

  // clear phone container card before adding new cars
  phoneContainer.textContent = "";

  // display show all button if there more than 12 phonse
  if (phones.length > 12 && !isShowAll) {
    showAllPhoneButton.classList.remove("hidden");
  } else {
    showAllPhoneButton.classList.add("hidden");
  }

  // display only first 12 phone if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);

    // 2 create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl p-2`;

    // 3: set innerHTML
    phoneCard.innerHTML = `
        <figure class="bg-slate-100">
            <img
                src="${phone.image}"
                alt="${phone.image}" class="p-3"
            />
            </figure>
            <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
            </div>
        `;

    // 4: appendChild
    phoneContainer.appendChild(phoneCard);
  });

  //hide loading spinner
  toggleLoadingSpinner(false);
};

//
const handleShowDetails = async (id) => {
  // console.log(id);
  // load in single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );

  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
};

const showPhoneDetails = (phone) => {
  //   const phoneName = document.getElementById("show-details-phone-name");
  //   phoneName.innerText = phone.name;
  const showDetailsContainer = document.getElementById(
    "show-details-container"
  );

  showDetailsContainer.innerHTML = `
     <figure class="bg-slate-100">
            <img
                src="${phone.image}"
                alt="${phone.image}"
            />
            </figure>
            <div class="card-body">
            <h2 class="card-title">${phone?.name}</h2>
            <p class="text-sm"> <span class="font-bold">Storage:</span> ${
              phone?.mainFeatures?.storage
            }</p>
            <p class="text-sm"> <span class="font-bold">Display Size:</span> ${
              phone?.mainFeatures?.displaySize
            }</p>
            <p class="text-sm"> <span class="font-bold">Chipset:</span> ${
              phone?.mainFeatures?.chipSet
            }</p>
              <p class="text-sm"> <span class="font-bold">Memory:</span> ${
                phone?.mainFeatures?.memory
              }</p>
              <p class="text-sm"> <span class="font-bold">Slug:</span> ${
                phone?.slug
              }</p>
              <p class="text-sm"> <span class="font-bold">Release data :</span> ${
                phone?.releaseDate
              }</p>
              <p class="text-sm"> <span class="font-bold">Brand:</span> ${
                phone?.brand
              }</p>
                <p class="text-sm"> <span class="font-bold">GPS:</span> ${
                  phone?.others?.GPS || "No GPS Available"
                }</p>


            </div>

    `;

  console.log(phone);
  // show the modal
  show_details_modal.showModal();
};

const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  loadPhone(searchText, isShowAll);
  //   searchField.value = "";
};

const toggleLoadingSpinner = (isLoading) => {
  if (isLoading) {
    spinnerContainer.classList.remove("hidden");
  } else {
    spinnerContainer.classList.add("hidden");
  }
};

// handle show all
const handleShowAll = () => {
  handleSearch(true);
};

loadPhone();
