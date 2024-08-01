str = "hello how r u";

function reversestr(str) {
  console.log(str.split("").reverse().join(""));
}

reversestr(str);

rst = (str) => {
  console.log(str.split("").reverse().join(""));
};
rst(str);
rst("i amm good");
