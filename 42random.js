// create a function that take in a sentence and return arunning
// list of consonanta per word and vowels per words

function stringCode(sentence) {
  function isConsonants(char) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    return consonants.includes(char);
  }
  function isVowels(word) {
    let consonants = 0;
    let vowels = 0;

    for (const char of word) {
      if (isConsonants(char)) {
        consonants++;
      } else if ("aeiouAEIOU".includes(char)) {
        vowels++;
      }
    }
    return consonants + " " + vowels;
  }
  const words = sentence.split(" ");
  console.log(words);

  const consonantCount = words.map((word) => isVowels(word));
  return consonantCount;
}

console.log(stringCode("Happy Birthday To Me"));
