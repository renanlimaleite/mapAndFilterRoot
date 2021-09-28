const arrayQlqr = [10, 20, 30, 40, 50]

const mapOriginal = arrayQlqr.map(number => number * 3)

function meuArray(arr, callback) {
  let tmpArr = []
  for (let i = 0; i < arr.length; i++) {
    tmpArr.push(callback(arr[i]))
  }
  return tmpArr
}


/**
 * OPCIONAL!!!!!!
 */
// const meuMap = meuArray(arrayQlqr, function (item) {
//   return item * 4
// })

const meuMap = meuArray(arrayQlqr, (item) => item * 4)

const filterOriginal = arrayQlqr.filter(number => number > 10)

function myFilter(arr, callback) {
  let tmpArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      tmpArr.push(arr[i])
    }
  }
  return tmpArr
}

const meuFilter = myFilter(arrayQlqr, function (number) {
  return number > 20
})


console.log({
  arrayQlqr,
  mapOriginal,
  meuMap,
  filterOriginal,
  meuFilter
})