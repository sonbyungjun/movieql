export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "haha",
    age: 19,
    gender: "male"
  },
  {
    id: "2",
    name: "hoho",
    age: 18,
    gender: "female"
  },
  {
    id: "3",
    name: "hihi",
    age: 28,
    gender: "female"
  },
  {
    id: "4",
    name: "hh",
    age: 13,
    gender: "male"
  },
  {
    id: "5",
    name: "aa",
    age: 15,
    gender: "female"
  },
  {
    id: "6",
    name: "dd",
    age: 18,
    gender: "male"
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}
