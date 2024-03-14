const findElementById = id =>{
    return document.getElementById(id);
}

const handleSort = () =>{
  handleCategory(selectCategory,true)
}

let selectCategory = 1000;
let sortByView = false;

const fetchData = async () =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/categories`
    );

    const data = await res.json();
    const categories = data.data;
    showCategory(categories)
    // console.log(phones);
}

const showCategory = categories =>{
    categories.forEach(category => {
        // console.log(category.category_id);
         findElementById("btn-container").innerHTML += `
         <button id="btn-category" onclick="handleCategory('${category.category_id}')" class="btn category-btn">${category.category}</button>
        `;
    });
}

const handleCategory = async (id='1000',sortByView) =>{

    findElementById("btn-container").addEventListener('click',e =>{
        if (e.target.tagName === 'BUTTON') {
          const allBtn = document.querySelectorAll(".category-btn");
          for (const btn of allBtn) {
            btn.classList.remove("bg-red-600", "text-white");
          }
          e.target.classList.add("bg-red-600", "text-white");
        }
    })

    selectCategory = id;
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );

    const data = await res.json();
    const categories = data.data;

    showCategories(categories,sortByView)
}


const showCategories = (categories,sortByView) =>{
    const cardContainer = findElementById("card-container");
    cardContainer.textContent = "";

    if (sortByView) {
      cardContainer.sort((a,b)=>{
        const firstTotalView = a.others?.views;
        const secondTotalView = b.others?.views;
        const firstTotalViewNum = parseFloat(firstTotalView.replace("K","")) || 0;
        const secondTotalViewNum = parseFloat(secondTotalView.replace("K","")) || 0;
        return secondTotalViewNum - firstTotalViewNum;
      })
    }


    categories.forEach(category =>{
        const div = document.createElement("div");
        div.classList = "card bg-base-100 shadow-xl";
        div.innerHTML = `
         <figure>
              <img
                src="${category.thumbnail}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>${category.others.views}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        `;
        cardContainer.appendChild(div)
    })

}


fetchData();
handleCategory(selectCategory,sortByView);