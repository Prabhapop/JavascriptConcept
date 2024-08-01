// reverseOdd("Apple") => elppA
// reverseOdd("One Two Four")=> enO owT Four

function reverseOdd(str) {
  function reverseStr(str) {
    console.log(str);
    return str.split("").reverse().join("");
  }
  const words = str.split(" ");
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      words[i] = reverseStr(words[i]);
    }
  }
  return words.join(" ");
}
console.log(reverseOdd("One Two Four"));
