const findElementById = (id) => {
  return document.getElementById(id);
};

const loadData = async (isSeeMore) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

  const data = await res.json();
  const tools = data.data.tools;
  displayTools(tools,isSeeMore);
};

const displayTools = (tools,isSeeMore) => {
    findElementById("tool-container").textContent = "";

    if (!isSeeMore) {
        tools = tools.slice(0,6);
    }

  tools.forEach((tool) => {
    const div = document.createElement("div");
    let list = '';
         tool.features.forEach((feature) => {
            list += `<li>${feature}</li>`
     });

    div.innerHTML = `
             <div class="card bg-base-100 shadow-xl ">
              <figure><img src="${
                tool?.image || "./images/banner.jpg"
              }" alt="Shoes" /></figure>
              <div class="card-body space-y-4">
                <h2 class="card-title">Features</h2>
                <ul class="list-decimal">${list}</ul>

                 <div class="border-t"></div>
                   <div class="flex justify-between items-center">
                    <div class="space-y-3">
                        <h2 class="font-bold">${tool?.name}</h2>
                        <div class="flex gap-3">
                        <img src="./images/data.png" alt="" class="">
                        <h2>${tool?.published_in}</h2>
                        </div>
                    </div>
                    <div><i onclick="handleShowDetails('${
                      tool?.id
                    }')" class="fa-solid fa-arrow-right bg-slate-200 p-2 cursor-pointer rounded-full"></i></div>
                    </div>
              </div>
            </div>
        `;
    findElementById("tool-container").appendChild(div);
  });
};

const handleShowDetails = async (id) =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/ai/tool/${id}`
    );
    const data = await res.json();
    const tool = data.data;
    showToolDetails(tool);
}

const showToolDetails = (tool) => {

  const features = tool.features;
  const integrations = tool.integrations;

  let featuresList = "";
  let integrationsList = "";

  for (const feature in features) {
    featuresList += `<li>${features[feature]?.feature_name}</li>`;
  }

  for (const integration in integrations) {
    integrationsList += `<li>${integrations[integration]}</li>`;
  }

  findElementById("details-card-left").innerHTML = `
       <div class="card-body  space-y-6">
     <h2 class="card-title">${tool.description}</h2>

       <section class="grid grid-cols-3 gap-5">
        <section class="bg-white shadow-lg rounded-2xl p-3 text-center">
      <h3 class="text-[#03A30A] font-bold">${
        (tool.pricing && tool?.pricing[0]?.price.slice(0, 4)) ||
        "Not Fixed Price"
      } <br> ${(tool.pricing && tool?.pricing[0]?.price.slice(4)) || ""} <br>
        ${(tool.pricing && tool.pricing[0].plan) || ""}</h3>
    </section>
        <section class="bg-white shadow-lg rounded-2xl p-3 text-center">
      <h3 class="text-[#F28927] font-bold">${
        (tool.pricing && tool?.pricing[1]?.price.slice(0, 4)) ||
        "Not Fixed Price"
      } <br> ${(tool.pricing && tool?.pricing[1]?.price.slice(4)) || ""} <br>
        ${(tool.pricing && tool?.pricing[1]?.plan) || ""}</h3>
    </section>
        <section class="bg-white shadow-lg rounded-2xl p-3 text-center">
      <h3 class="text-[#EB5757] font-bold">${
        (tool.pricing && tool?.pricing[2]?.price.slice(0, 4)) ||
        "Not Fixed Price"
      } <br> ${(tool.pricing && tool?.pricing[2]?.price.slice(4)) || ""} <br>
        ${(tool.pricing && tool?.pricing[2]?.plan) || ""}</h3>
    </section>
      </section>

       <section class="grid grid-cols-2  justify-between">
      <div class="space-y-4">
        <h2 class="text-[#111] text-2xl font-semibold">Features</h2>
          <div class="pl-6">
             <ul class="list-disc">${featuresList || "No data Found"} </ul>
          </div>
      </div>
      <div class="space-y-4">
        <h2 class="text-[#111] text-2xl font-semibold">Integrations</h2>
          <div class="pl-6">
             <ul class="list-disc">${integrationsList || "No data Found"}</ul>
          </div>
      </div>
    </section>

   </div>
  `;

  findElementById("details-card-right").innerHTML = `
                <figure><img src="${
                  tool?.image_link[0]
                }" alt="Shoes" /></figure>
                  <div class="card-body text-center">
                    <h2 class="font-bold">${
                      (tool.input_output_examples &&
                        tool?.input_output_examples[0]?.input) ||
                      "Can you give any example?"
                    } </h2>
                    <p class="w-2/3 mx-auto">${
                      (tool.input_output_examples &&
                        tool?.input_output_examples[0]?.output) ||
                      "No! Not Yet! Take a break!!!"
                    } </p>
                  ${
                    tool.accuracy?.score ?
                    `<div class="badge bg-[#EB5757] text-white p-4 absolute translate-x-10 right-0 top-5">
                        ${100 * tool?.accuracy?.score}% accuracy
                      </div>`:""
                  }
                  </div>
  `;

  see_more_modal.showModal();
};


const handleSeeMore = () =>{
    loadData(true)
    findElementById("see-more-btn-container").classList.add("hidden");
}



loadData();
