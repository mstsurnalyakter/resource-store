
import { useEffect, useState } from "react";


const JobCategory = () => {
 const [categories, setCategories] = useState([]);

 useEffect(() => {
   const loadData = async () => {
     try {
       const res = await fetch("./data/categories.json");
       const data = await res.json();
       setCategories(data);
     } catch (error) {
       console.error(error);
     }
   };
   loadData();
 }, []);
 console.log(categories);

  return (
    <section className="py-6 mb-4">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Job Category List</h2>
          <p className="font-serif text-sm text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {
            categories.map(category=>{
              const {id,logo,availability,category_name} = category;
              return (
                <article key={id} className="flex flex-col bg-gradient-to-r from-blue-50 rounded-lg to-purple-50">
                  <figure className="bg-gradient-to-r mt-10 ml-10 from-blue-100 mb-4 flex items-center justify-center to-purple-100 bg-opacity-10 w-20 h-20 rounded-lg">
                    <img alt="" className="w-10 h-10" src={logo} />
                  </figure>
                  <div className="flex flex-col p-6 ml-4">
                    <h3 className="flex-1 text-xl font-extrabold text-[#474747] leading-snug mb-1">
                      {category_name}
                    </h3>
                    <p className="text-[#A3A3A3] font-medium">
                     {availability}
                    </p>
                  </div>
                </article>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default JobCategory