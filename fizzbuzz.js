const fb = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// anagram chacker

const anagram = (s1, s2) => {
  const cleaneds1 = s1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
  const cleaneds2 = s2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  console.log(cleaneds1);
  console.log(cleaneds2);

  return cleaneds1 == cleaneds2;
};

console.log(anagram("shIVam kahsyap ", "kashyap  shivam"));

// fb();
