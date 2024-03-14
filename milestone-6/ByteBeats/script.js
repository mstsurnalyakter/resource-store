const findElementById = id =>{
    return document.getElementById(id);
}

const loadAllPostData = async (searchText) =>{
  toggleLoadingSpinner(true);
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts`
    );
    const data = await res.json();
    let posts = data.posts;
      displayPostData(posts,searchText);

}

const displayPostData = (posts,searchText) =>{
findElementById("all-post-container").textContent = ""
  if (searchText) {
    posts = searchText;
    if (posts.length === 0) {
      setTimeout(() => {
        findElementById("error-container").classList.remove("hidden");
      }, 2000);
    }else{
      findElementById("error-container").classList.add("hidden");
    }
  }else{
    posts = posts
  }


  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.classList =
        "card grid grid-cols-1 lg:grid-cols-3 bg-base-100 shadow-xl";
      div.innerHTML = `
        <figure class="relative">
        ${
          post.isActive
            ? `<div class="badge bg-green-600 badge-lg right-0 top-0  absolute"></div>`
            : `<div class="badge bg-red-600 badge-lg right-0 top-0  absolute"></div>`
        }

              <img
                src="${post.image}"
                alt="image" class="object-cover h-full"
              />
            </figure>
            <div class="card-body lg:col-span-2">
        <div>
        <div class="inter mb-4 font-medium text-[14px] flex gap-2 text-[#12192DCC]">
            <span># ${post.category}</span>
            <span>Author : ${post.author.name}</span>
        </div>
        <div class="mb-10">
            <h2 class="text-[#12132D] mb-4 text-xl font-bold">${post.title}</h2>
            <p class="inter text-[#12192D99]">${post.description}</p>
        </div>
        <div class="border-t-2 mb-5 border-[#12192D40] border-dashed"></div>
        <div class="flex justify-between items-center">
            <div class="flex gap-10 items-center">
            <p class="flex items-center justify-center gap-2"><img src="./images/message.png" alt=""><span>${
              post.comment_count
            }</span></p>
            <p class="flex items-center justify-center gap-2"><img src="./images/eye.png" alt=""><span>${
              post.view_count
            }</span></p>
            <p class="flex items-center justify-center gap-2"><img src="./images/time.png" alt=""><span>${
              post.posted_time
            } min</span></p>
            </div>
             <div><img onclick="handleReadInfo('${post.title.replace(
               /'/g,
               "@"
             )}','${
        post.view_count
      }')" src="./images/email.png" class="cursor-pointer" alt=""></div>
        </div>
    </div>
            </div>
        `;
      findElementById("all-post-container").appendChild(div);
    });

  }, 2000);

    toggleLoadingSpinner(false);

}

const handleReadInfo = async (title, viewCount) => {
let readNum = findElementById("read-num").innerText;
readNum++;
findElementById("read-num").innerText = readNum;
  const div = document.createElement('div');
  div.classList =
    "bg-white rounded-2xl flex items-center px-1 gap-2 md:px-5 mb-3";
  div.innerHTML = `
        <h2 class="text-[#12132D]">${title.replace(/@/g, "'")}</h2>
        <p class="flex items-center justify-center"><img src="./images/eye.png" alt="">${viewCount}</p>
  `;
  findElementById("read-info-container").appendChild(div);
};

const loadLatestPostData = async () =>{
   toggleLoadingSpinner2(true);
   const res = await fetch(
     `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
   );
   const posts = await res.json();
  displayLatestPostData(posts)
}

const displayLatestPostData = posts =>{
setTimeout(() => {
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl";
    div.innerHTML = `
      <figure>
              <img src="${post.cover_image}" alt="cover_image" /></figure>
            <div class="card-body">
              <div class="flex items-center justify-center gap-2">
                <img src="./images/date.png"  alt="">
                <p class="text-[#12192D99]">${
                  post.author.posted_date || "No Publish Date"
                }</p>
              </div>
              <h2 class="text[#12132D] font-extrabold text-lg">${
                post.title
              }</h2>
              <p class="text-[#12192D99]">${post.description}</p>
              <div class="flex items-center gap-2">
                <img class="w-9 h-9 object-cover rounded-full" src="${
                  post.profile_image
                }" alt="profile_image">
                <div>
                  <h2 class="text-[#12132D] font-bold">${post.author.name}</h2>
                  <p class="text-[#12192D99]">${
                    post.author.designation || "Unknown"
                  }</p>
                </div>
              </div>
            </div>
    `;
    findElementById("latest-post-container").appendChild(div);
  });
}, 2000);
toggleLoadingSpinner2(false);

}

const handleSearch = async () =>{
 toggleLoadingSpinner(true);
  const searchText = findElementById("search-field").value;

 const res = await fetch(
   `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
 );

  const data = await res.json();
  let posts = data.posts;

  loadAllPostData(posts);
}


const toggleLoadingSpinner = (isLoading) => {
  const loaderContainer = document.getElementById("loader-container");
  if (isLoading) {
    loaderContainer.classList.remove("hidden");
  } else {
    setTimeout(() => {
       loaderContainer.classList.add("hidden");
     }, 2000);
  }
};

const toggleLoadingSpinner2 = (isLoading) => {
  const loaderContainer = document.getElementById("loader-container2");
  if (isLoading) {
    loaderContainer.classList.remove("hidden");
  } else {
    setTimeout(() => {
      loaderContainer.classList.add("hidden");
    }, 2000);
  }
};



loadLatestPostData()

loadAllPostData();