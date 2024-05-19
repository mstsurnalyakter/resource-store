const Avatar2 = () => {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const name = "Gregorio Y. Zara";
  return (
    <section className="border-2 w-1/2 mx-auto my-7 border-red-500">
      <h2 className="text-2xl text-center mt-5 font-bold text-emerald-500">
       {name}
      </h2>
      <img
        className="rounded-full my-5 mx-auto border-red-500 border-2"
        src={avatar}
        alt={name}
      />
    </section>
  );
};

export default Avatar2;
