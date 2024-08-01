import React from "react";

export default function BirthdayList({people}) {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person; // Destructuring the 'person' object
        return (
          <div key={id} className="flex items-center gap-6 my-6">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} className="w-20 rounded-full" />
            <div>
              <h1 className="font-bold mb-2">{name}</h1> 
              <h2 className="text-gray-600">{age} years</h2> 
            </div>
          </div>
        );
      })}
    </div>
  );
}
