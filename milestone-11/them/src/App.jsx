import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards, Autoplay} from "swiper/modules";
import Testimonials from "./components/Testimonials";
import TestimonialsCard from "./components/TestimonialsCard";

function App() {





  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?  localStorage.getItem("theme") : 'system'
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark")
    }else{
      element.classList.remove("dark");
    }
  };

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch()
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change",e=>{
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      }else{
        element.classList.remove("dark")
      }
    }
  })


  return (
    <div className="min-h-screen px-10 mt-20 pt-8 shadow-md container mx-auto flex items-center justify-center flex-col gap-4 dark:text-gray-100 dark:bg-slate-900 duration-100 relative">
      <div className="fixed top-5 right-10 px-5 dark:bg-slate-800 bg bg-gray-100 rounded">
        {options?.map((opt) => (
          <button
            onClick={() => setTheme(opt.text)}
            key={opt.text}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>

      <Testimonials/>

      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
          delay: 3000,
        }}
          modules={[EffectCards,Autoplay]}
          className="w-[500px] shadow"
        >
          <SwiperSlide>
            <TestimonialsCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard/>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard/>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              Quisque
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Nam maximus purus
            </h2>
          </div>
          <p className="dark:text-gray-800">
            Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
            sed feugiat mi. Etiam ut lacinia dui.
          </p>
        </div>
      </motion.div> */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>

      {/* lllllllllllllllllll */}
      <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        iste reprehenderit. Blanditiis voluptates ut ducimus doloremque deleniti
        voluptate vero maiores error modi illum corporis reprehenderit eligendi
        quibusdam maxime cum perferendis architecto laboriosam repellat vel,
        fuga sed odit dolorum. Error natus doloribus laboriosam perferendis, ad
        explicabo eveniet soluta, sunt itaque amet nisi vitae assumenda
        veritatis repellat laudantium obcaecati, iusto minima repellendus
        accusamus quibusdam. Corporis magnam itaque similique
      </p>
      <p>
        nihil id consequuntur beatae officia voluptas saepe, recusandae tempore
        quo necessitatibus suscipit minus culpa odit eius fugiat dicta molestias
        odio cumque repellendus voluptate tempora adipisci! Vero ex culpa
        voluptatibus itaque a quibusdam in accusantium ratione corporis quos
        porro exercitationem provident deserunt maiores, dolorum sit
        repellendus. Eum nulla numquam atque placeat beatae. Tempore molestiae
        quas consequuntur earum, architecto ut quos est sint! Eaque assumenda
        quasi ab, dolorem cupiditate perspiciatis tenetur deserunt cumque
        temporibus illo fugit sed excepturi officiis deleniti autem? Dolorum
        voluptate, fuga inventore quam aliquam nam laborum hic, architecto nihil
        ipsam itaque dolor vitae id maxime soluta odit quo quaerat provident
        praesentium error modi officiis aut repellat dolores. Harum repellat
        enim, nobis sint expedita non blanditiis consectetur, rerum asperiores
        porro aspernatur sequi ratione et exercitationem libero repudiandae
        dignissimos iusto delectus nihil voluptatem mollitia neque?
      </p>
    </div>
  );
}

export default App;
