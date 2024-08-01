// find randam no. from given range

randomMaxMin = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomMaxMin(50, 90));
