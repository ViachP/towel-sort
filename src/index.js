
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
   let result = [];
  matrix.forEach((element, index) => {
    index % 2 ? result.push(...element.reverse()) : result.push(...element)
  });
  return result;
}
