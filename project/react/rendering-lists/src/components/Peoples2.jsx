import People2 from "./People2";

const Peoples2 = () => {
    const peoples = [
      {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician",
      },
      {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
      },
      {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "physicist",
      },
      {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "chemist",
      },
      {
        id: 4,
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrophysicist",
      },
    ];
  return (
    <div>
        <h2 className="mt-3 text-xl font-bold">Peoples: {peoples.length}</h2>
        <ul className="border-2 border-purple-600 mt-5">
            {
                peoples.filter(people=>people.profession ==="chemist").map(people=><People2 key={people.id} people={people} />)
            }
        </ul>
    </div>
  )
}

export default Peoples2