const findElementById = (id) => {
  return document.getElementById(id);
};

const fetchData = async (searchText = "iphone", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayData(phones, isShowAll);
};

const displayData = (phones, isShowAll) => {
  // console.log(phones);
  const phoneContainer = findElementById("phone-container");
  phoneContainer.textContent = "";

  if (phones.length === 0) {
    findElementById("error-container").classList.remove("hidden");
  } else {
    findElementById("error-container").classList.add("hidden");
  }

  if (phones.length > 9 && !isShowAll) {
    findElementById("show-all-btn").classList.remove("hidden");
  } else {
    findElementById("show-all-btn").classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 9);
  }

  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList = `card bg-base-100 shadow-xl`;

    div.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick="fetchDataById('${phone.slug}')" class="btn btn-primary">See Detail</button>
            </div>
        </div>

        `;
    phoneContainer.appendChild(div);
  });
  handleLoader(false);
};

const handleSearch = (isShowAll, id) => {
  handleLoader(true);
  const searchText = findElementById("search-field").value || "iphone";
  fetchData(searchText, isShowAll);
};

const handleShowAllBtn = () => {
  handleSearch(true);
};

const handleLoader = (isLoading) => {
  if (isLoading) {
    findElementById("loader").classList.remove("hidden");
  } else {
    findElementById("loader").classList.add("hidden");
  }
};

const fetchDataById = async (id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showDetailPhoneData(phone);
};

const showDetailPhoneData = (phone) => {
  findElementById("modal-detail-container").innerHTML = `
    <div class="card">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;

  my_modal_5.showModal();
};

fetchData();
