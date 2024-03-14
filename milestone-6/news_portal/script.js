const findElementById = id =>{
    return document.getElementById(id);
}

const fetchAllCategory = async () =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const data = await res.json();
    const categories = data.data.news_category;




    categories.forEach(category =>{
      // console.log(category.category_id);
        newBtn = document.createElement("button");
        newBtn.classList = 'btn'
        newBtn.innerText = category.category_name;
         findElementById("btn-container").appendChild(newBtn);
         newBtn.addEventListener(
           "click",()=>{
             fetchNewsCardData(`${category.category_id}`);
           }

         );
    })
}


const fetchNewsCardData = async (id="01") =>{
  console.log(id);
    const res = await fetch(
      ` https://openapi.programming-hero.com/api/news/category/${id}`
    );
    const data = await res.json();
    const newData = data.data

    // console.log(newData);
    findElementById("card-data-container").textContent = "";

    newData.forEach(data=>{
      const div = document.createElement('div');
      div.classList = "card grid grid-cols-3 bg-base-100 shadow-xl";
        // console.log(data);
        div.innerHTML = `
        <figure>
              <img
                src="${data.thumbnail_url}"
                alt="Movie"
              />
            </figure>
            <div class="card-body col-span-2">
              <h2 class="font-bold">${data.title}</h2>
              <p>${data.details.slice(0, 200)}</p>
               <div class="grid grid-cols-4 gap-2">
        <div class="flex gap-2">
          <figure>
            <img class="w-9 h-9 object-cover rounded-full" src="${
              data.image_url
            }" alt="" />
          </figure>
          <div>
            <h3 class="text-[10px]">${data.author.name}</h3>

          </div>
        </div>
        <div>
          <i class="fa-regular fa-eye"></i>
          <span>${data.total_view}M</span>
        </div>
        <div>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div><i class="fa-solid fa-arrow-right"></i></div>
      </div>
            </div>
        `;
        findElementById("card-data-container").appendChild(div)
    })

}

fetchNewsCardData();



fetchAllCategory()