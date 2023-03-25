// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
const arrayMethods = document.querySelector("#array-methods");

// Some data we can work with

// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

appendToDocument("List of people", people);
appendToDocument("List of comments", comments);

// Some and Every Checks
// Array.prototype.some()
appendToDocument(
  "Is at least one person 19 or older?",
  people.some((person) => new Date().getFullYear() - person.year >= 19)
);

// Array.prototype.every()
appendToDocument(
  "Is everyone 19 or older?",
  people.every((person) => new Date().getFullYear() - person.year >= 19)
);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
appendToDocument(
  "Find the comment with the ID of 823423",
  comments.find((comment) => comment.id === 823423)
);

// Array.prototype.findIndex()
// Find the comment with this ID
appendToDocument(
  "Find the comment index with ID of 823423",
  comments.findIndex(function callbackFn(comment) {
    return comment.id === 823423;
  })
);

function ourSome(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    ans = callbackFn(this[i]);
    if (ans) {
      return true;
    }
  }
  return false;
}

function ourEvery(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    ans = callbackFn(this[i]);
    if (!ans) {
      return false;
    }
  }
  return true;
}

function ourFind(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    ans = callbackFn(this[i]);
    if (ans) {
      return this[i];
    }
  }
  return undefined;
}

function ourFindIndex(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    ans = callbackFn(this[i]);
    if (ans) {
      return i;
    }
  }
  return -1;
}

Array.prototype.ourSome = ourSome;
Array.prototype.ourEvery = ourEvery;
Array.prototype.ourFind = ourFind;
Array.prototype.ourFindIndex = ourFindIndex;

appendToDocument("Our own some()", ourSome.toString());
appendToDocument(
  "(Our Some) Is at least one person 19 or older?",
  people.ourSome((person) => new Date().getFullYear() - person.year >= 19)
);

appendToDocument("Our own every()", ourEvery.toString());
appendToDocument(
  "(Our Every) Is everyone 19 or older?",
  people.ourEvery((person) => new Date().getFullYear() - person.year >= 19)
);

appendToDocument("Our own find()", ourFind.toString());
appendToDocument(
  "(Our Find) Find the comment with the ID of 823423",
  comments.ourFind((comment) => comment.id === 823423)
);

appendToDocument("Our own findIndex()", ourFindIndex.toString());
appendToDocument(
  "(Our FindIndex) Find the comment with the ID of 823423",
  comments.ourFindIndex((comment) => comment.id === 823423)
);

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
