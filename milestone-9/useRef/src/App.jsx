import { useEffect, useRef } from "react";
import "./App.css";
import ForwardedInput from "./Input";
import { useInView } from "react-intersection-observer";

function App() {
  const inputRef = useRef();


    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
      delay:2000,
    });
    console.log(inView);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <section
          ref={ref}
          className={`min-h-screen ${
            inView ? "bg-lime-200" : "bg-purple-200"
          } bg-purple-200 flex items-center justify-center`}
        >
          About
        </section>
        <section className="min-h-screen bg-red-200 flex items-center justify-center">
          Banner
        </section>
        <section className="min-h-screen bg-yellow-200 flex items-center justify-center">
          Team
        </section>
      </div>
      <div>
        <ForwardedInput ref={inputRef} type="text" placeholder="You name" />
      </div>
    </>
  );
}

export default App;
