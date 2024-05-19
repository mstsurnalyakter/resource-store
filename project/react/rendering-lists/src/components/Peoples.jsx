import React from 'react'
import People from './People';

const Peoples = () => {
    const peoples = [
      "Creola Katherine Johnson: mathematician",
      "Mario José Molina-Pasquel Henríquez: chemist",
      "Mohammad Abdus Salam: physicist",
      "Percy Lavon Julian: chemist",
      "Subrahmanyan Chandrasekhar: astrophysicist",
    ];
  return (
    <div>
      <h3 className='mb-4 text-2xl font-bold'>People:{peoples.length}</h3>
      <ol className="border-2 border-purple-700 p-4 pl-10 list-decimal">
        {peoples.map((people, index) => (
          <People people={people} key={index} />
        ))}
      </ol>
    </div>
  );
}

export default Peoples