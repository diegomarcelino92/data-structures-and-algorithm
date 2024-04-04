import { isBiggerThan, swap, timer, unorderedList } from "../utils.js";

const bubbleSort = () => {
  for (let i = 0; i < unorderedList.length - 1; i++) {
    for (let j = 0; j < unorderedList.length - i - 1; j++) {
      if (isBiggerThan(unorderedList[j], unorderedList[j + 1])) {
        swap(j, j + 1, unorderedList);
      }
    }
  }

  return unorderedList;
};

timer(bubbleSort);
