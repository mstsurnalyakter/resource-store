const findElementById = id =>{
    return document.getElementById(id);
}

const loadPhone = async (searchText = "iphone",isShowAll) => {
  const resp = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await resp.json();
  const phones = data.data;
  displayPhones(phones,isShowAll);
};

const displayPhones = (phones,isShowAll) => {
    const phoneContainer = findElementById("phone-container");

    if (phones.length > 9 && !isShowAll) {
        findElementById("show-all-btn").classList.remove("hidden");
    }else{
        findElementById("show-all-btn").classList.add("hidden");
    }

    if (!isShowAll) {

        phones = phones.slice(0,8);
    }

    phoneContainer.textContent = "";
  phones.forEach((phone) => {
    const div = document.createElement('div');
    div.classList = "card bg-base-100 shadow-xl";
    div.innerHTML = `
         <figure>
              <img
                src=${phone?.image} alt="phone image"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone?.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(div);
  });

  handleLoader(false);
};

const handleSearch = (isShowAll) =>{
    handleLoader(true);
    const searchText = findElementById("search-field").value || "iphone";
    loadPhone(searchText,isShowAll)
}

const handleShowAllBtn = () =>{
    handleSearch(true)
}

const handleLoader = (isLoading) =>{
    if (isLoading) {
        findElementById("loader").classList.remove("hidden");
    }else{
        findElementById("loader").classList.add("hidden");

    }
}

const handleShowDetail = async id =>{
     const resp = await fetch(
       `https://openapi.programming-hero.com/api/phone/${id}`
     );
  const data = await resp.json();
  const phone = data.data;
  displayDetailData(phone)
  findElementById("modal-detail-container").innerHTML = `
                      <div class="card">
                <figure>
                  <img
                    src="${phone.image}"
                    alt="phone image"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${phone?.name || "Phone"}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
  `;

  my_modal_5.showModal();

}

const displayDetailData = phone =>{
    console.log(phone);

}

loadPhone();
