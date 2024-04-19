import { isLessThan, swap, timer, unorderedList } from "../utils.js";

const selectionSort = () => {
  const listSize = unorderedList.length;

  for (let i = 0; i < listSize; i++) {
    let lessIndex = i;

    for (let j = i + 1; j < listSize; j++) {
      const lessElement = unorderedList[lessIndex];
      const nextElement = unorderedList[j];

      if (isLessThan(nextElement, lessElement)) {
        lessIndex = j;
      }
    }

    if (lessIndex !== i) {
      console.log(`index of less element [${unorderedList}] :`, lessIndex);
      console.log(`[${unorderedList}]`);
      swap(lessIndex, i, unorderedList);
    }
  }

  return unorderedList;
};

timer(selectionSort);
