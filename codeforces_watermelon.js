// unpause stream
process.stdin.resume();
// set it to interpret input as text
process.stdin.setEncoding("utf-8");
// listen for data
process.stdin.on("data", function (text) {
  console.log(main(parseInt(text)));
});
function main(n) {
  if (n % 2 === 0 && n > 2) {
    return "YES";
  } else {
    return "NO";
  }
}
