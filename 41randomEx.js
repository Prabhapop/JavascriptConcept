function textNumberBinary(str) {
  const words = str
    .split(" ")
    .filter(
      (word) => word.toLowerCase() === "zero" || word.toLowerCase() === "one"
    );

  console.log(words);

  let binaryString = words
    .map((word) => {
      return word.toLowerCase() === "one" ? "1" : "0";
    })
    .join("");

  const excessLength = binaryString.length % 8;

  if (excessLength !== 0) {
    binaryString = binaryString.slice(0, binaryString.length - excessLength);
  }

  console.log(binaryString);
}
console.log(textNumberBinary("Zero one ONE zero One zero ONE ZERO One"));
