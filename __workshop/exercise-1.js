// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  let myPromise = new Promise((resolve, reject) => {
    let string = array.every((element) => {
      return typeof element === "string";
    });

    if (string) {
      resolve(
        arrayOfWords.map(function (x) {
          return x.toUpperCase();
        })
      );
    } else {
      reject("This array consists of more than strings");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  //you write array here since its the result of the previous function
  console.log(array);
  let myPromise = new Promise((resolve, reject) => {
    resolve(array.sort());
  });
  return myPromise;
  // write some code
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result, "string"))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
