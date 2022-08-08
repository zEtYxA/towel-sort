
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) { return [] }
  let stuck = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      stuck.push(matrix[i].reverse())
    }
    else {
      stuck.push(matrix[i])
    }
  }
  let stuck2 = [];
  stuck.forEach(el => el.forEach(el => stuck2.push(el)))

  return stuck2
}

//console.log(module.exports());
