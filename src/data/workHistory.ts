const now = new Date();

export const graphStart: [number, number] = [3, 2016];
export const graphEnd: [number, number] = [
  now.getMonth() + 1,
  now.getFullYear(),
];

export function monthDuration(
  start: [number, number],
  end: [number, number]
): number {
  const yearTotal = (end[1] - start[1] + 1) * 12;
  const monthDeduction = start[0] + (12 - end[0]);
  return Math.abs(yearTotal - monthDeduction);
}

export const graphWidth = monthDuration(graphStart, graphEnd);

export function prcntg(duration: number): number {
  return (duration / graphWidth) * 100;
}

export const workHistory: {
  name: string;
  start: [number, number];
  end: [number, number];
  role: string;
  company: string;
}[] = [
  // {
  //   name: "elliptic",
  //   start: [8, 2021],
  //   end: graphEnd,
  //   role: "Senior Product Designer",
  //   company: "Elliptic",
  // },
  {
    name: "parrot",
    start: [2, 2021],
    end: graphEnd,
    role: "Founder",
    company: "Parrot",
  },
  {
    name: "mentor",
    start: [7, 2020],
    end: graphEnd,
    role: "Mentor",
    company: "CodeHub & WTH",
  },
  {
    name: "ranges",
    start: [1, 2020],
    end: graphEnd,
    role: "Senior Product Designer",
    company: "ranges.io",
  },
  {
    name: "vojo",
    start: [9, 2019],
    end: [3, 2020],
    role: "Consultant",
    company: "Vojo",
  },
  {
    name: "maibee",
    start: [3, 2019],
    end: [10, 2019],
    role: "Consultant",
    company: "Maibee",
  },
  {
    name: "ps",
    start: [10, 2018],
    end: [1, 2020],
    role: "Digital Designer",
    company: "Protctor + Stevenson",
  },
  {
    name: "rac",
    start: [3, 2018],
    end: [10, 2018],
    role: "Digital Designer",
    company: "RAC",
  },
  {
    name: "e78",
    start: [3, 2017],
    end: [3, 2018],
    role: "Digital Designer",
    company: "Element78",
  },
  {
    name: "unite",
    start: [7, 2016],
    end: [3, 2017],
    role: "Junior Designer",
    company: "Unite Students",
  },
  {
    name: "filtration",
    start: graphStart,
    end: [7, 2016],
    role: "Designer & Developer",
    company: "Filtration Ltd",
  },
];
