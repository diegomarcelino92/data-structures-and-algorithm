import { isLessThan, swap, timer, unorderedList } from "../utils.js";

const selectionSort = () => {
  for (let i = 0; i < unorderedList.length; i++) {
    let lessIndex = i;

    for (let j = i + 1; j < unorderedList.length; j++) {
      const nextElement = unorderedList[j];
      const lessElement = unorderedList[lessIndex];

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
