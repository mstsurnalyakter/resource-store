let selectedCategory = 1000;
let sortByView = false;

const findElementById = id =>{
    return document.getElementById(id);
}

const sortHandler = () =>{
  handleCategory(selectedCategory,true)
}

const loadAllCategory = async () =>{
    const res = await fetch(
      ` https://openapi.programming-hero.com/api/videos/categories`
    );
    const data = await res.json();
    const categories = data.data;


    categories.forEach(category => {
        findElementById("btn-container").innerHTML += `
          <button  onclick="handleCategory('${category.category_id}')"  class="category-btn btn bg-[#e0a2aa] hover:bg-[#dd7784]">
          ${category.category}
        </button>
        `;
    });

}

const handleCategory = async (id,sortByView) =>{
  selectedCategory = id;


findElementById("btn-container").addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const allBtn = document.querySelectorAll(".category-btn");
        for (const btn of allBtn) {
          btn.classList.remove("bg-red-600", "text-white");
        }
        e.target.classList.add("bg-red-600", "text-white");
      }
});


    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    const categories = data.data;

    findElementById("video-container").textContent = "";
    if (categories.length === 0) {
      findElementById("error-message").classList.remove("hidden");
    } else {
      findElementById("error-message").classList.add("hidden");
    }


   if (sortByView) {
     categories.sort((a, b) => {
       const firstTotalView = a.others?.views;
       const secondTotalView = b.others?.views;
       const firstTotalViewNum =
         parseFloat(firstTotalView.replace("K", "")) || 0;
       const secondTotalViewNum =
         parseFloat(secondTotalView.replace("K", "")) || 0;
       return secondTotalViewNum - firstTotalViewNum;
     });
   }

   categories.forEach((category) => {
     const div = document.createElement("div");
     div.innerHTML = `
             <div id="video-item" class="card bg-base-100 shadow-xl">
            <figure class="overflow-hidden h-72">
              <img
                src=${category.thumbnail}
                alt="course banner" class="w-full"
              />
            </figure>
            <div class="card-body space-y-2">
                <div class="flex gap-3 items-center">
                  <div class="">
                  <figure>
                  <img src="${
                    category.authors[0].profile_picture
                  }" alt="" class="rounded-full w-14 h-14">
                  </figure>
                  </div>
                  <h2 class="text-[#171717] text-[16px] font-bold">
                    ${category.title}
              </h2>
                </div>
              <div class="flex gap-2 pl-11">
                <span class="text-[14px] text-[#171717B3]"> ${
                  category.authors[0].profile_name
                }</span>
                ${
                  category?.authors[0]?.verified
                    ? ` <img src="./images/badge.png" alt="" class="">`
                    : ""
                }

              </div>
              <p class="text-[14px] text-[#171717B3] pl-11">${
                category.others.views
              }</p>

            </div>
          </div>

        `;
     findElementById("video-container").appendChild(div);
   });


    displayCategories(categories,sortByView);
}

const displayCategories = (categories,sortByView) => {
  findElementById("video-container").textContent = "";
  if (categories.length === 0) {
    findElementById("error-message").classList.remove("hidden");
  } else {
    findElementById("error-message").classList.add("hidden");
  }

   if (sortByView) {
     categories.sort((a, b) => {
      const firstTotalView = a.others?.views;
      const secondTotalView = b.others?.views;
      const firstTotalViewNum = parseFloat(firstTotalView.replace("K","")) || 0;
      const secondTotalViewNum = parseFloat(secondTotalView.replace("K","")) || 0;
      return secondTotalViewNum - firstTotalViewNum;
     });
   }

  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
             <div id="video-item" class="card bg-base-100 shadow-xl">
            <figure class="overflow-hidden  relative">
              <img
                src=${category.thumbnail}
                alt="course banner" class="w-full h-72 object-cover"
              />
              ${
                category?.others?.posted_date
                  ? `
                 <div class="badge bg-[#FF1F3D] text-white absolute bottom-7 right-3">
                 0${category.others.posted_date.slice(0, 1) || "00"} :
                 ${category.others.posted_date.slice(1, 3) || "00"} : ${
                      category.others.posted_date.slice(3, 5) || "00"
                    } : ${category.others.posted_date.slice(5) || "000"}
                 </div>
                `
                  : ""
              }

            </figure>
            <div class="card-body space-y-2">
                <div class="flex gap-3 items-center">
                  <div class="">
                  <figure>
                  <img src="${
                    category.authors[0].profile_picture
                  }" alt="" class="rounded-full w-14 h-14">
                  </figure>
                  </div>
                  <h2 class="text-[#171717] text-[16px] font-bold">
                    ${category.title}
              </h2>
                </div>
              <div class="flex gap-2 pl-11">
                <span class="text-[14px] text-[#171717B3]"> ${
                  category.authors[0].profile_name
                }</span>
                ${
                  category?.authors[0]?.verified
                    ? ` <img src="./images/badge.png" alt="" class="">`
                    : ""
                }

              </div>
              <p class="text-[14px] text-[#171717B3] pl-11">${
                category.others.views
              }</p>

            </div>
          </div>

        `;
    findElementById("video-container").appendChild(div);
  });
};



loadAllCategory();
handleCategory(selectedCategory,sortByView);