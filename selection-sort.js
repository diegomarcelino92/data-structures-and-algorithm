import { isLessThan, swap, timer, unorderedList } from './utils.js'

const selectionSort = () => {
  for (let i = 0; i < unorderedList.length; i++) {
    let lessIndex = i

    for (let j = i + 1; j < unorderedList.length; j++) {
      const lessElement = unorderedList[lessIndex]
      const nextElement = unorderedList[j]

      if (isLessThan(nextElement, lessElement)) {
        lessIndex = j
      }
    }

    swap(lessIndex, i, unorderedList)
  }

  return unorderedList
}

timer(selectionSort)
