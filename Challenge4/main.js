// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
const arrayMethods = document.querySelector("#array-methods");

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// got the list using document.querySelectorAll(".mw-category-group > ul > li > a").forEach((ele) => console.log(ele.innerText))
const boulevards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

const vehicleTypes = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

appendToDocument("List of inventors", inventors);
appendToDocument("List of people", people);
appendToDocument("List of Boulevards", boulevards);
appendToDocument("List of vehicle types", vehicleTypes);

// Array.prototype.filter()
appendToDocument(
  "1. Filter the list of inventors for those who were born in the 1500's",
  inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1599)
);

// Array.prototype.map()
appendToDocument(
  "2. Give us an array of the inventors first and last names",
  inventors.map((inventor) => inventor.first + " " + inventor.last)
);

// Array.prototype.sort()
appendToDocument(
  "3. Sort the inventors by birthdate, oldest to youngest",
  inventors.sort((inventor1, inventor2) => inventor2.year - inventor1.year)
);

// Array.prototype.reduce()
appendToDocument(
  "4. How many years did all the inventors live all together?",
  inventors.reduce((prevSum, inventor) => {
    currInvestorAge = inventor.passed - inventor.year;
    return prevSum + currInvestorAge;
  }, 0)
);

appendToDocument(
  "5. Sort the inventors by years lived",
  inventors.sort(
    (inventor1, inventor2) =>
      inventor1.passed - inventor1.year - (inventor2.passed - inventor2.year)
  )
);

appendToDocument(
  "6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name",
  boulevards.filter((bolevard) => bolevard.includes("de"))
);

appendToDocument(
  "7. Sort the people alphabetically by last name",
  people.sort((person1, person2) =>
    person1.split(", ")[1].localeCompare(person2.split(", ")[1])
  )
);

appendToDocument(
  "8. Frequency of each vehicle type in the list",
  vehicleTypes.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] = prev[curr] + 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {})
);

function ourMap(callbackFn) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const curr = this[i];
    output.push(callbackFn(curr));
  }
  return output;
}

appendToDocument("Created own map()", ourMap.toString());

function ourFilter(callbackFn) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    const curr = this[i];
    const ans = callbackFn(curr);
    if (ans) {
      filtered.push(curr);
    }
  }
  return filtered;
}

appendToDocument("Created own filter()", ourFilter.toString());

function ourReduce(callbackFn, obj) {
  for (let i = 0; i < this.length; i++) {
    const curr = this[i];
    obj = callbackFn(obj, curr);
  }
  return obj;
}

appendToDocument("Created own reduce()", ourReduce.toString());

function defaultCompare(a, b) {
  return a.toString().localeCompare(b.toString());
}

function ourSort(callbackFn) {
  if (callbackFn == undefined) {
    callbackFn = defaultCompare;
  }
  if (this.length <= 1) {
    return this;
  }
  const mid = this.length / 2;
  const left = this.slice(0, mid);
  const right = this.slice(mid);
  return merge(left.ourSort(callbackFn), right.ourSort(callbackFn), callbackFn);
}

function merge(left, right, callbackFn) {
  let idx1 = 0;
  let idx2 = 0;
  const out = [];
  while (idx1 < left.length && idx2 < right.length) {
    if (callbackFn(left[idx1], right[idx2]) < 0) {
      out.push(left[idx1]);
      idx1++;
    } else {
      out.push(right[idx2]);
      idx2++;
    }
  }
  while (idx1 < left.length) {
    out.push(left[idx1++]);
  }
  while (idx2 < right.length) {
    out.push(right[idx2++]);
  }
  return out;
}

appendToDocument(
  "Created own sort()",
  ourSort.toString() +
    "\n\n" +
    defaultCompare.toString() +
    "\n\n" +
    merge.toString()
);

Array.prototype.ourMap = ourMap;
Array.prototype.ourReduce = ourReduce;
Array.prototype.ourFilter = ourFilter;
Array.prototype.ourSort = ourSort;

console.log(inventors.ourMap((curr) => curr.year + 100));

console.log(inventors.ourFilter((ele) => ele.year >= 1500 && ele.year < 1600));

console.log(
  inventors.ourReduce((acc, curr) => {
    if (curr.year > 1500 && curr.year < 1600) {
      acc.push(curr.first + " " + curr.last);
    }
    return acc;
  }, [])
);

const sortThisArray = [20, 15, 10, 5];
console.log(sortThisArray.ourSort((a, b) => b - a));

function appendToDocument(question, answer) {
  const detailsEle = document.createElement("details");
  const questionEle = document.createElement("summary");
  const answerEle = document.createElement("pre");

  questionEle.innerText = question;

  /** Because JSON.stringify converts \n to \\n we have to replace it back
   * The regular expression /\\n/g matches all occurrences of \\n.
   * The g flag stands for "global", which means that all occurrences in the string will be replaced, not just the first one.
   * The result of the replace() method is a new string with all occurrences of \\n replaced with \n.
   */
  answerEle.innerHTML = JSON.stringify(answer, null, 2).replace(/\\n/g, "\n");

  detailsEle.appendChild(questionEle);
  detailsEle.appendChild(answerEle);
  arrayMethods.append(detailsEle);
}
