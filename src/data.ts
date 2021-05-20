export type Repository = {
  name: string;
  status: string;
  last: string;
  id: number;
  zip: number;
  state: string;
};

export const repositories: Repository[] = [
  {
    name: "John",
    status:
    "Inactive",
    last: "Smith",
    id: 2200,
    zip: 10001,
    state: "CA",
  },
  {
    name: "Amy",
    status:
    "Active",
    last: "Green",
    id: 648,
    zip: 11221,
    state: "NY",
  },
  {
    name: "Bob",
    status:  "Active",
    last: "Dunn",
    id: 3000,
    zip: 20033,
    state: "AZ",
  },
  {
    name: "Joe",
    status:  "Active",
    last: "Adams",
    id: 1700,
    zip: 85221,
    state: "NJ",
  },
  {
    name: "Mary",
    status:  "Active",
    last: "Smith",
    id: 3300,
    zip: 10081,
    state: "CT",
  },
  {
    name: "Pat",
    status:
    "Inactive",
    last: "Turner",
    id: 3200,
    zip: 30021,
    state: "ME",
  },
  {
    name: "Will",
    status: "Inactive",
    last: "Mann",
    id: 1000,
    zip: 50122,
    state: "KY",
  },
  
   
];
