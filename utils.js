export const isLessThan = (el1, elm2) => el1 < elm2
export const isBiggerThan = (el1, elm2) => el1 > elm2

export const swap = (toIndex, fromIndex, list) => {
  const fromElement = list[fromIndex]
  list[fromIndex] = list[toIndex]
  list[toIndex] = fromElement
}

export const timer = (callback) => {
  console.log(`Unsorted: [${unorderedList}]`)

  console.time(callback.name)
  const result = callback()
  console.timeEnd(callback.name)

  console.log(`Sorted: [${result}]`)
}

export const unorderedList = [5, 4, 2, 1, 3]
