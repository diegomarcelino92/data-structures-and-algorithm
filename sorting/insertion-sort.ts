import { isLessThan, swap, timer, unorderedList } from "../utils.js";

const insertionSort = () => {
  for (let i = 0; i < unorderedList.length; i++) {
    let j = i;

    while (j > 0 && isLessThan(unorderedList[j], unorderedList[j - 1])) {
      swap(j, j - 1, unorderedList);

      j--;
    }
  }

  return unorderedList;
};

timer(insertionSort);
